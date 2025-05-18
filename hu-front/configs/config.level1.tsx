import React from "react";
import { View, Text } from "react-native";
import { LevelFeatures } from "@/types/level.types";
import Checklist from "@/components/ui/Checklist";
import LottieView from "lottie-react-native";
import { createLevel } from "./createLevel";

const animation = require("../assets/lottie/badge-animation.json");

const IntroductionStep = () => (
  <View>
    <Text className="text-white text-lg">
      Voordat je kunt groeien als leider, moet je jezelf leren begrijpen. Wat
      drijft jou? Hoe reageer je op de wereld om je heen? In deze eerste fase
      maak je kennis met de basisprincipes van persoonlijk leiderschap. Je
      ontdekt hoe je meer invloed kunt uitoefenen op je eigen leven — door
      bewust te kiezen hoe je denkt, voelt en handelt.
    </Text>
  </View>
);

const ChecklistStep = React.memo(
  ({ features }: { features: Partial<LevelFeatures> }) => (
    <View>
      <Text className="text-white text-3xl">Lees de volgende hoofdstukken</Text>
      <Checklist
        items={[
          "Paradigma's en principes",
          "Van binnen naar buiten",
          "De 7 eigenschappen - een overzicht",
          "Samenvatting",
        ]}
        onCheck={features.checklist?.handleCheck ?? (() => {})}
        checkedItems={features.checklist?.checkedItems ?? []}
        checkedColor="bg-orange"
      />
    </View>
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.features.checklist?.checkedItems ===
      nextProps.features.checklist?.checkedItems
    );
  }
);

const CompletionStep = () => (
  <View className="justify-center items-center">
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
      verkennen van paradigma's en principes van binnen naar buiten. Een mooie
      stap richting persoonlijk leiderschap. Goed bezig!
    </Text>
  </View>
);

const level1Base = {
  levelName: "Inleiding",
  levelDescription: "Level 1: Eerste stappen",
  color: "bg-orange",
  steps: [
    {
      id: 1,
      component: <IntroductionStep />,
    },
    {
      id: 2,
      component: (features: Partial<LevelFeatures>) => (
        <ChecklistStep features={features} />
      ),
    },
    {
      id: 3,
      component: <CompletionStep />,
    },
  ],
};

export default createLevel(level1Base, (features) => ({
  checklist: {
    items: [
      "Paradigma's en principes",
      "Van binnen naar buiten",
      "De 7 eigenschappen - een overzicht",
      "Samenvatting",
    ],
    checkedItems: features.checklist?.checkedItems ?? [],
    handleCheck: features.checklist?.handleCheck ?? (() => {}),
  },
}));
