import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import InputField from "@/components/InputField";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";
import LevelHero from "@/components/ui/LevelHero";
import Slider from "@react-native-community/slider";

const IntroStep = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="my-5 flex-1">
      <LevelHero level={14} hexColor="#893EEA"></LevelHero>
      <Text className="text-white text-lg">
        In dit level ga je bezig met win/win situaties.
        {"\n\n"}
        Hoe kan je zorgen dat je prettige en evenwichtige relaties opbouwt met
        andere mensen?
        {"\n\n"}
        Veel mensen zijn vaak erg op het belang van de ander gericht en vergeten
        zichzelf. Anderen denken misschien vooral aan zichzelf.
        {"\n\n"}
      </Text>
      <Text className="text-white text-lg">
        Hoe kun je de belangen van alle partijen erkennen en een win/win
        creëren?
      </Text>
    </View>
  );
};

const ConflictStep = () => {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  return (
    <View className="flex-1">
      <Text className="text-white text-lg mb-5">
        Beschijf 2 concrete conflictsituaties waarin er sprake was van een
        win-win oplossing in 1 zin.
      </Text>
      <View style={{ marginVertical: 20 }}>
        <Text className="text-white text-2xl">Situatie 1</Text>
        <InputField
          placeholder="Jouw punt..."
          value={inputValue}
          onChangeText={setInputValue}
          fullHeight
        />
        <Text className="text-white text-lg">
          Hoeveel was er hier sprake van win-win?
        </Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          value={slider1}
          onValueChange={setSlider1}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#666666"
          thumbTintColor="#FFFFFF"
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text className="text-white text-2xl">Situatie 2</Text>
        <InputField
          placeholder="Jouw punt..."
          value={inputValue2}
          onChangeText={setInputValue2}
          fullHeight
        />
        <Text className="text-white text-lg">
          Hoeveel was er hier sprake van win-win?
        </Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          value={slider2}
          onValueChange={setSlider2}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#666666"
          thumbTintColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default function level14Config(
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
        component: <ConflictStep />,
      },
    ],
  };
}
