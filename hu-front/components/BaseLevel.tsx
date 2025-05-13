import React from "react";
import { LevelConfig } from "@/types/level.types";
import { useRouter } from "expo-router";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";
import LevelHeader from "@/components/ui/LevelHeader";

interface BaseLevelProps {
  config: LevelConfig;
}

const BaseLevel = ({ config }: BaseLevelProps) => {
  const router = useRouter();
  const { steps, step, currentStepIndex, next, back, isLastStep } =
    useMultiStepForm(config.steps.map((step) => step.component));
  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="w-full flex-1 bg-[#333333]">
        <LevelHeader
          levelName={config.levelName}
          levelDescription={config.levelDescription}
          barProgression={currentStepIndex / steps.length}
          handleBackPress={back}
          progressionColor={config.color}
        />
        {step}
        <View className="absolute bottom-0 left-0 right-0 flex-row w-full gap-x-4 py-5 bg-[#333333]">
          <FormBottomNavigation
            next={isLastStep ? () => router.replace("/(main)/dashboard") : next}
            back={back}
            isLastStep={isLastStep}
            buttonColor={config.color}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default BaseLevel;
