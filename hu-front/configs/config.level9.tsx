import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import LottieView from "lottie-react-native";
import LevelHero from "@/components/ui/LevelHero";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/InputField";
import UploadFile from "@/components/svgs/UploadFileSvg";
import UploadFileSvg2 from "@/components/svgs/UploadFileSvg2";

const animation = require("../assets/lottie/badge-animation.json");

const IntroStep = () => (
  <View className="my-5 flex-1">
    <Text className="text-white text-lg">
      Voor de volgende level schrijf en upload een image over een concept voor
      een persoonlijke missie.
    </Text>
    <Text className="text-white text-lg my-5">
      Als je alles zou durven, wie zou je dan willen zijn en hoe zou je leven
      eruitzien.
    </Text>
    <Text className="text-white text-3xl">Tip</Text>
    <Text className="text-white text-lg my-5">
      Je kan je persoonlijke missie schrijven aan de hand van de rollen, zoals
      beschreven staat in het boek van covey
    </Text>
  </View>
);

const CompletionStep = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="flex-1">
      <View className="flex h-[200] justify-center items-center bg-[#464646] mt-5 rounded-3xl border-dashed border-white border-2">
        <UploadFileSvg2 />
        <Text className="text-white mt-5">Upload hier</Text>
      </View>
      <InputField
        fullHeight
        placeholder="Beschrijving"
        value={inputValue}
        onChangeText={setInputValue}
      />
    </View>
  );
};

export default function level9Config(
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
        component: <CompletionStep />,
      },
    ],
  };
}
