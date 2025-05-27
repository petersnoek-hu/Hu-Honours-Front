import React from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import BulletList from "@/components/ui/BulletList";
import UploadFile from "@/components/svgs/UploadFileSvg";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";
import LottieView from "lottie-react-native";

const animation = require("../assets/lottie/badge-animation.json");

const IntroStep = () => (
  <View className="flex-1">
    <Text className="text-xl text-white mb-10">
      Iedereen heeft een uniek verhaal. Jij ook. In deze opdracht ga je jouw
      persoonlijke verhaal tot leven brengen — niet met lange teksten, maar met
      beelden en jouw eigen stem.
    </Text>
    <Text className="text-3xl text-white my-3">Wat ga je doen?</Text>
    <Text className="text-xl text-white">
      Je maakt een korte presentatie bestaande uit vier foto's. Elke foto staat
      symbool voor een onderdeel van jouw verhaal. Je gebruikt geen tekst in je
      slides — jij bent degene die het verhaal vertelt.
    </Text>
  </View>
);

const InstructionsStep = () => {
  const bulletListItems = [
    "Je hebt maximaal 1 minuut spreektijd per foto.",
    "Vertel bij elke foto wat het voor jou betekent.",
    "De foto's moeten antwoord geven op de volgend vragen:",
  ];

  return (
    <View className="flex-1">
      <Text className="text-3xl text-white my-3">Binnen je presentatie</Text>
      <BulletList items={bulletListItems} />
      <Text className="text-white my-2">Wie ben jij?</Text>
      <Text className="text-white my-2">
        Welke hoogtepunten hebben jou gevormd
      </Text>
      <Text className="text-white my-2">
        Welke dieptepunten hebben jou gevormd?
      </Text>
      <Text className="text-white my-2">
        Waar wil je deze cursus voor gebruiken of waarin wil jij je ontwikkelen?
      </Text>
    </View>
  );
};

const UploadStep = () => (
  <View className="flex-1">
    <View className="flex-row bg-blue h-[200] justify-around items-center p-5 mb-5 rounded-3xl">
      <View className="flex h-full justify-center">
        <Text className="text-3xl font-bold color-white pb-2">Upload</Text>
        <Text className="color-white w-3/4 pt-2">
          Upload hier je presentatie
        </Text>
      </View>
      <View>
        <UploadFile />
      </View>
    </View>
    <View className="flex h-[200] justify-center items-center bg-[#464646] mt-5 rounded-3xl border-dashed border-white border-2">
      <UploadFileSvg2 />
      <Text className="text-white mt-5">Upload hier</Text>
    </View>
  </View>
);

const CompletionStep = () => (
  <View className="flex-1 h-full justify-center items-center">
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
      Zelfinzicht Starter
    </Text>
    <Text className="text-white">
      Je hebt de inleiding afgerond en de eerste stap gezet naar persoonlijk
      leiderschap. Goed bezig!
    </Text>
  </View>
);

export default function level2Config(
  features?: Partial<LevelFeatures>
): LevelConfig {
  return {
    levelName: "Inleiding",
    levelDescription: "Level 2: jouw verhaal in beeld",
    features: {}, // Geen specifieke features nodig voor level 2
    steps: [
      {
        id: 1,
        component: <IntroStep />,
      },
      {
        id: 2,
        component: <InstructionsStep />,
      },
      {
        id: 3,
        component: <UploadStep />,
      },
      {
        id: 4,
        component: <CompletionStep />,
      },
    ],
  };
}
