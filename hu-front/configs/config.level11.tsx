import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import InputField from "@/components/InputField";
import DistributionSliders from "@/components/ui/DistributionSliders";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";

const animation = require("../assets/lottie/badge-animation.json");

const IntroStep = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="my-5 flex-1">
      <Text className="text-white text-lg">
        in dit level ga je een Kritisch incident beschrijven . bekijk voor de
        uitwerking van het kritisch incident de toelichting bij eind opdracht
        (hoofdstuk 5)
      </Text>
      <Text className="text-white text-2xl">
        Beschrijf een kritisch incident
      </Text>
      <InputField
        placeholder="Jouw punt..."
        fullHeight
        value={inputValue}
        onChangeText={setInputValue}
      />
    </View>
  );
};

const DescriptionStep = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="flex-1">
      <Text className="text-white text-lg">
        Na de bijeenkomst: vol het kritisch incident aan op basis van de
        feedback uit de bijeenkomst en lever het hier in.
      </Text>
      <View className="flex h-[200] justify-center items-center bg-[#464646] mt-5 rounded-3xl border-dashed border-white border-2">
        <UploadFileSvg2 />
        <Text className="text-white mt-5">Upload hier</Text>
      </View>
      <Text className="text-white text-lg">
        Maak een afspraak met je docent om het kritisch incident te bespreken
        doe dit z.s.m
      </Text>
    </View>
  );
};

export default function level10Config(
  features?: Partial<LevelFeatures>
): LevelConfig {
  return {
    levelName: "Challenge 3",
    levelDescription: "Level 9: Persoonlijke Missie",
    features: {
      inputFields: features?.inputFields,
    },
    steps: [
      {
        id: 1,
        component: <IntroStep />,
      },
      {
        id: 2,
        component: <DescriptionStep />,
      },
    ],
  };
}
