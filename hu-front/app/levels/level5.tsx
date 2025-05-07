import { useMultiStepForm } from "@/hooks/useMultistepForm";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const level5 = () => {
  const { steps, currentStepIndex, next, back, isLastStep } = useMultiStepForm([
    <View></View>,
  ]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>level5</Text>
    </SafeAreaView>
  );
};

export default level5;
