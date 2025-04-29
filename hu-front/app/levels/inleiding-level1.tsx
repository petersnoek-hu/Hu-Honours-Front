import CustomButton from "@/components/ui/CustomButton";
import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useRouter } from "expo-router";
import Checklist from "@/components/ui/Checklist";
import LottieView from "lottie-react-native";

const InleidingLevel1 = () => {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const animation = require("../../assets/lottie/badge-animation.json");

  const handleCheck = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const { step, isLastStep, isFirstStep, back, next } = useMultiStepForm([
    <View key={0} className="flex-1">
      <Text className="text-white text-lg">
        Voordat je kunt groeien als leider, moet je jezelf leren begrijpen. Wat
        drijft jou? Hoe reageer je op de wereld om je heen? In deze eerste fase
        maak je kennis met de basisprincipes van persoonlijk leiderschap. Je
        ontdekt hoe je meer invloed kunt uitoefenen op je eigen leven — door
        bewust te kiezen hoe je denkt, voelt en handelt.
      </Text>
    </View>,
    <View key={1} className="flex-1">
      <Text className="text-white text-3xl">Lees de volgende hoofdstukken</Text>
      <Checklist
        items={[
          "Paradigma's en principes",
          "Van binnen naar buiten",
          "De 7 eigenschappen - een overzicht",
          "Samenvatting",
        ]}
        onCheck={handleCheck}
        checkedItems={checkedItems}
      ></Checklist>
    </View>,
    <View key={3} className="flex-1 h-full justify-center items-center">
      <View className="overflow-clip w-[250] h-[250] justify-center items-center">
        <LottieView
          source={animation}
          autoPlay={true}
          loop={true}
          resizeMode="contain"
          style={{
            width: 600,
            aspectRatio: 1,
          }}
        />
      </View>
      <Text className="text-white text-3xl font-bold mb-3">
        Boekenwurm starter
      </Text>
      <Text className="text-white">
        Je hebt de eerste drie hoofdstukken gelezen en bent gestart met het
        verkennen van paradigma’s en principes van binnen naar buiten. Een mooie
        stap richting persoonlijk leiderschap. Goed bezig!
      </Text>
    </View>,
  ]);

  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="flex-1 w-full bg-[#333333]">
        <LevelHeader
          levelName="Inleiding"
          levelDescription="Level 1: Eerste stappen"
          barProgression={0.1}
          handleBackPress={() => {
            isFirstStep ? router.replace("/(main)/dashboard") : back();
          }}
        />
        {step}
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
      </View>
    </SafeAreaView>
  );
};

export default InleidingLevel1;
