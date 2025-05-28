import { TouchableOpacity, Text, Image, View } from "react-native";
import React, { useState } from "react";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  icon?: any;
  backgroundColor?: string;
  shadow?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
  backgroundColor,
  shadow = false,
}: CustomButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View className="w-full relative bg-transparent">
      {shadow && (
        <View className="absolute bg-[#FFFFFF66] rounded-2xl h-full top-5 w-full"></View>
      )}
      <TouchableOpacity
        onPress={handlePress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        activeOpacity={0.9}
        className={`min-h-[50px] flex-row items-center justify-center rounded-full bg-[#F6F6F6] ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`}
        style={{
          top: isPressed && shadow ? 6 : 0,
        }}
        disabled={isLoading}
      >
        {icon && (
          <Image source={icon} className="absolute left-6 h-[25] w-[25]" />
        )}
        <Text className={`font-bold text-lg text-primary ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
