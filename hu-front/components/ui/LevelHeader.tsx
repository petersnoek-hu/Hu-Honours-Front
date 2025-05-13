import React from "react";
import { Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";

type LevelHeaderProps = {
  levelName: string;
  levelDescription: string;
  barProgression: number;
  handleBackPress: () => void;
  progressionColor?: string;
};

const LevelHeader = ({
  levelName,
  levelDescription,
  barProgression,
  handleBackPress,
  progressionColor = "bg-orange",
}: LevelHeaderProps) => {
  return (
    <View className="px-4 pt-4 my-5">
      <View className="flex-row items-center justify-between">
        <IconButton
          icon={require("../../assets/images/arrow-left.png")}
          height={50}
          width={50}
          handlePress={handleBackPress}
        />
        <View className="flex-1 items-center -ml-6">
          <Text className="text-white font-psemibold text-2xl">
            {levelName}
          </Text>
          <Text className="text-white text-sm">{levelDescription}</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View className="mt-2">
        <ProgressBar
          duration={500}
          progress={barProgression}
          color={progressionColor}
        />
      </View>
    </View>
  );
};

export default LevelHeader;
