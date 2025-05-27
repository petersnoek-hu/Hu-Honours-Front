import React from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import LottieView from "lottie-react-native";
import LevelHero from "@/components/ui/LevelHero";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/InputField";
import { createLevel } from "./createLevel";

const animation = require("../assets/lottie/badge-animation.json");

const InputFieldStep = ({
  inputFields,
}: {
  inputFields?: LevelFeatures["inputFields"];
}) => {
  const addInputField = () => {
    if (!inputFields) return;
    if (!inputFields.setFields) return;
    if (!inputFields.fields) return;
    if (!inputFields.values) return;
    if (!inputFields.setValues) return;

    const newIndex = inputFields.fields.length;

    // Update de waarden eerst
    const newValues = [...inputFields.values];
    newValues[newIndex] = ""; // Voeg een lege string toe voor het nieuwe veld
    inputFields.setValues(newValues);

    // Dan de velden bijwerken
    const newFields = [
      ...inputFields.fields,
      <InputField
        key={newIndex}
        placeholder="Jouw punt..."
        value={inputFields.values[newIndex] || ""}
        onChangeText={(text) => {
          const updatedValues = [...inputFields.values];
          updatedValues[newIndex] = text;
          inputFields.setValues(updatedValues);
        }}
      />,
    ];

    inputFields.setFields(newFields);
  };

  return (
    <View className="flex-1 my-5">
      <LevelHero level={3} color="bg-orange" />
      <View className="w-full justify-center items-center mb-4">
        <Text className="text-white text-xl">
          Welke drie punten uit het hoofdstuk spreken je het meeste aan?
        </Text>
      </View>
      <View className="w-full">
        {inputFields?.fields &&
          inputFields.fields.map((item, index) => (
            <View key={index} className="mb-4">
              {item}
            </View>
          ))}
        <IconButton
          handlePress={addInputField}
          icon={require("@/assets/images/book.png")}
        />
      </View>
    </View>
  );
};

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
      Cirkel van betrokkenheid
    </Text>
    <Text className="text-white">
      Je hebt level 3 afgerond en begrijpt nu beter hoe de cirkel van
      betrokkenheid werkt.
    </Text>
  </View>
);

export default function level3Config(
  features?: Partial<LevelFeatures>
): LevelConfig {
  return {
    levelName: "Cirkel van betrokkenheid",
    levelDescription: "Level 3: De cirkel van betrokkenheid",
    features: {
      inputFields: features?.inputFields,
    },
    steps: [
      {
        id: 1,
        component: <InputFieldStep inputFields={features?.inputFields} />,
      },
      {
        id: 2,
        component: <CompletionStep />,
      },
    ],
  };
}
