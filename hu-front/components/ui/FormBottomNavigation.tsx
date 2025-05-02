import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";

type Props = {
  back: () => void;
  next: () => void;
  isLastStep: boolean;
};

const FormBottomNavigation = ({ back, next, isLastStep }: Props) => {
  return (
    <View className="flex-row w-full gap-x-4 py-5">
      <CustomButton
        title="Back"
        handlePress={back}
        textStyles="text-white"
        containerStyles="bg-blue flex-1 h-[40px] rounded-xl"
      />
      <CustomButton
        title={isLastStep ? "Voltooien" : "Volgende"}
        handlePress={next}
        textStyles="text-white"
        containerStyles="bg-blue flex-1 h-[40px] rounded-xl"
      />
    </View>
  );
};

export default FormBottomNavigation;
