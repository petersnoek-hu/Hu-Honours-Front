import CustomButton from "@/components/ui/CustomButton";
import LevelHeader from "@/components/ui/LevelHeader";
import { useMultiStepForm } from "@/hooks/useMultistepForm";
import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useRouter } from "expo-router";
import Checklist from "@/components/ui/Checklist";
import LottieView from "lottie-react-native";
import FormBottomNavigation from "@/components/ui/FormBottomNavigation";

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
    <View key={0}>
      <Text className="text-white text-lg">
        Voordat je kunt groeien als leider, moet je jezelf leren begrijpen. Wat
        drijft jou? Hoe reageer je op de wereld om je heen? In deze eerste fase
        maak je kennis met de basisprincipes van persoonlijk leiderschap. Je
        ontdekt hoe je meer invloed kunt uitoefenen op je eigen leven — door
        bewust te kiezen hoe je denkt, voelt en handelt.
      </Text>
    </View>,
    <View key={1}>
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
      />
    </View>,
    <View key={3} className="justify-center items-center">
      <View className="overflow-clip w-[300] h-[300] justify-center items-center">
        <LottieView
          source={animation}
          autoPlay={true}
          loop={true}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
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
      <View className="w-full flex-1 bg-[#333333] relative">
        <LevelHeader
          levelName="Inleiding"
          levelDescription="Level 1: Eerste stappen"
          barProgression={0.1}
          handleBackPress={() => {
            router.replace("/(main)/dashboard");
          }}
        />
        {step}
        <View className="absolute bottom-0 left-0 right-0 flex-row w-full gap-x-4 py-5 bg-[#333333]">
          <FormBottomNavigation
            next={isLastStep ? () => router.replace("/(main)/dashboard") : next}
            back={back}
            isLastStep={isLastStep}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InleidingLevel1;
