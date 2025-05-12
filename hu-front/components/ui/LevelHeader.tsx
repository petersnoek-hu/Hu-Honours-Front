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
};

const LevelHeader = ({
  levelName,
  levelDescription,
  barProgression,
  handleBackPress,
}: LevelHeaderProps) => {
  return (
    <View className="pt-4 my-5">
      <View className="flex-row items-center justify-between">
        <IconButton
          icon={require("../../assets/images/arrow-left.png")}
          height={50}
          width={50}
          handlePress={handleBackPress}
        />
        <View className="flex-1 items-center -ml-6">
          <Text className="color-gray-100 font-bold text-4xl">
            {levelName}
          </Text>
          <Text className="color-gray-300 font-medium text-base">{levelDescription}</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View className="mt-2">
        <ProgressBar duration={500} progress={barProgression} />
      </View>
    </View>
  );
};

export default LevelHeader;
