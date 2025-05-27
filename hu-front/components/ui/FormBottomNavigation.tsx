import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";

type Props = {
  back: () => void;
  next: () => void;
  isLastStep: boolean;
  buttonColor ?: string;
};

const FormBottomNavigation = ({ back, next, isLastStep, buttonColor }: Props) => {
  return (
    <View className="w-full py-5">
      <View className="flex-row w-full gap-x-4">
        <View className="flex-1">
          <CustomButton
            title="Vorige"
            handlePress={back}
            textStyles="text-white"
            containerStyles="h-[40px] rounded-xl bg-transparent border-2 border-[#F6F6F6] w-3/4"
          />
        </View>

        <View className="flex-1">
          <CustomButton
            title={isLastStep ? "Voltooien" : "Volgende"}
            handlePress={next}
            textStyles="text-black"
            containerStyles="h-[40px] rounded-xl"
            backgroundColor={buttonColor}
            shadow={true}
          />
        </View>
      </View>
    </View>
  );
};

export default FormBottomNavigation;
