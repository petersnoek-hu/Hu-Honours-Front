import { useState } from "react";
import { LevelConfig, LevelStep } from "@/types/level.types";
import React, { useMemo, useCallback } from "react";
import { useRouter } from "expo-router";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";
import LevelHeader from "@/components/ui/LevelHeader";

interface BaseLevelProps {
  config: LevelConfig;
}

const BaseLevel = ({ config }: BaseLevelProps) => {
  const router = useRouter();

  // Memoize features to maintain stable reference
  const features = useMemo(() => config.features || {}, [config.features]);

  // Create stable transform function with proper typing
  const transformStep = useCallback(
    (step: LevelStep) => {
      if (typeof step.component === "function") {
        return step.component(features);
      }
      return step.component;
    },
    [features]
  );

  // Transform steps with stable function
  const transformedSteps = useMemo(
    () => config.steps.map(transformStep),
    [config.steps, transformStep]
  );

  const { steps, step, currentStepIndex, next, back, isLastStep } =
    useMultiStepForm(transformedSteps);

  const BOTTOM_NAV_HEIGHT = 100;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, backgroundColor: "white" }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <SafeAreaView className="flex-1 bg-[#333333">
          <View className="w-full flex-1 pt-[40] px-[20] bg-[#333333]">
            <LevelHeader
              levelName={config.levelName}
              levelDescription={config.levelDescription}
              barProgression={currentStepIndex / steps.length}
              handleBackPress={() => router.replace("/(main)/dashboard")}
              progressionColor={"bg-orange"}
            />

            <ScrollView
              className="flex-1"
              contentContainerStyle={{ paddingBottom: BOTTOM_NAV_HEIGHT }}
              showsVerticalScrollIndicator={false}
            >
              {step}
            </ScrollView>

            <View
              className="absolute bottom-0 left-0 right-0 bg-[#333333] px-5"
              style={{
                paddingBottom: Platform.OS === "ios" ? 20 : 10,
                paddingTop: 10,
              }}
            >
              <FormBottomNavigation
                next={
                  isLastStep ? () => router.replace("/(main)/dashboard") : next
                }
                back={back}
                isLastStep={isLastStep}
              />
            </View>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default BaseLevel;
