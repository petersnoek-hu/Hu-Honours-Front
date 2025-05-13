import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import React from "react";
import { View, Text } from "react-native";

const Level3 = () => {
  const { step, steps, currentStepIndex, next, back, isLastStep } =
    useMultiStepForm([
      <View className="bg-[#EE5B39] rounded-3xl px-5 pt-32 w-full">
        <LevelHeader
          levelName="Level 3"
          barProgression={0.1}
          handleBackPress={() => {}}
          levelDescription="Level 3"
        />
        <View className="w-full justify-center items-center">
          <Text className="color-white font-bold text-3xl">Level 3</Text>
          <Text className="color-white">Lees deze korte uitleg</Text>
        </View>
        <View className="w-full">
          <Text className="color-white w-1/2 text-lg">
            De cirkel van betrokkenheid bevat alles waar jij je mee bezighoudt,
            zoals werk, studie, nieuws of sociale situaties.
          </Text>
        </View>
      </View>,
    ]);
  return <></>;
};

export default Level3;
