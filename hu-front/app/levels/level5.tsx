import { useMultiStepForm } from "@/hooks/useMultistepForm";
import React from "react";
import { View } from "react-native";

const level5 = () => {
  const { steps, currentStepIndex, next, back, isLastStep } = useMultiStepForm([
    <View></View>,
  ]);

  return <div>level5</div>;
};

export default level5;
