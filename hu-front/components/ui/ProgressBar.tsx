import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

type ProgressBarProps = {
  progress: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  duration: number;
};

const ProgressBar = ({
  progress,
  height = 20,
  color = "bg-blue-500",
  backgroundColor = "bg-gray-500",
  duration = 500,
}: ProgressBarProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View className="py-2">
      <View className={`w-full rounded-full ${backgroundColor}`}>
        <Animated.View
          className={`h-[10] w-full`}
          style={{ width: widthInterpolated }}
        >
          <View className={`h-full w-full rounded-full ${color}`} />
        </Animated.View>
      </View>
    </View>
  );
};

export default ProgressBar;
