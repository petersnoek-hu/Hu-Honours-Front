import CustomButton from "@/components/ui/CustomButton";
import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";

const InleidingLevel2 = () => {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const { step, currentStepIndex, next, back, isLastStep, isFirstStep } =
    useMultiStepForm([
      <View className="flex-1">
        <Text className="text-xl text-white mb-10">
          Iedereen heeft een uniek verhaal. Jij ook. In deze opdracht ga je jouw
          persoonlijke verhaal tot leven brengen — niet met lange teksten, maar
          met beelden en jouw eigen stem.
        </Text>
        <Text className="text-3xl text-white my-3">Wat ga je doen?</Text>
        <Text className="text-xl text-white">
          Je maakt een korte presentatie bestaande uit vier foto’s. Elke foto
          staat symbool voor een onderdeel van jouw verhaal. Je gebruikt geen
          tekst in je slides — jij bent degene die het verhaal vertelt.
        </Text>
      </View>,
    ]);

  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="flex-1 w-full bg-[#333333]">
        <LevelHeader
          barProgression={0.1}
          handleBackPress={() => {
            isFirstStep ? router.replace("/(main)/dashboard") : back();
          }}
          levelName="Inleiding"
          levelDescription="Level 2: jouw verhaal in beeld"
        />
        {step}
      </View>
      <View className={`flex-row justify-end items-center my-5 w-full`}>
        {isLastStep ? (
          <CustomButton
            title="Voltooien"
            handlePress={() => {
              router.replace("/(main)/dashboard");
            }}
            textStyles="text-white"
            containerStyles="bg-blue w-full h-[40px] my-5 rounded-xl"
          />
        ) : (
          <CustomButton
            title="Volgende"
            handlePress={next}
            textStyles="text-white"
            containerStyles="bg-blue w-1/2 h-[40px] my-5 rounded-xl"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default InleidingLevel2;
