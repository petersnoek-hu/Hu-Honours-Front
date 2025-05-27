import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import LevelHero from "@/components/ui/LevelHero";
import InputField from "@/components/InputField";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";
import DistributionSliders from "@/components/ui/DistributionSliders";

const animation = require("../assets/lottie/badge-animation.json");

const IntroStep = () => (
  <View className="my-5 flex-1">
    <LevelHero level={10} hexColor="#E6302B" />
    <Text className="text-white text-lg">Bekijk de video hieronder</Text>
    <Text className="text-white text-lg">
      https://www.youtube.com/watch?v=PRep5UamYoA&ab_channel=MinionNoMore
    </Text>
  </View>
);

const DescriptionStep = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="flex-1 bg-orange">
      <Text className="text-white text-lg">
        welke relatie zie je tussen de eerste drie gewoontes van covey en de
        vier dimenties uit gewoonte 7 (lichamelijk, mentaal, spiritueel,
        sociaal-emotioneel)
      </Text>
      <View className="mt-5">
        <Text className="text-white text-2xl">
          Welke relatie zie je tussen de gewoontes?
        </Text>
        <InputField
          fullHeight
          placeholder="Noteer hier je antwoord"
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
    </View>
  );
};

const SliderStep = () => {
  return (
    <DistributionSliders
      items={[
        { id: "physical", label: "Fysiek", color: "#E6302B" },
        { id: "mental", label: "Mentaal", color: "#E6B32B" },
        { id: "spiritual", label: "Spiritueel", color: "#2BE6B3" },
        {
          id: "socialEmotional",
          label: "Sociaal-Emotioneel",
          color: "#2B6BE6",
        },
      ]}
      onChange={(values) => {
        console.log("Slider values changed:", values);
      }}
    />
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
      {
        id: 3,
        component: <SliderStep />,
      },
    ],
  };
}
