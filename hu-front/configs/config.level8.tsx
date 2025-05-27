import React, { useState } from "react";
import { View, Text } from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import LottieView from "lottie-react-native";
import LevelHero from "@/components/ui/LevelHero";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/InputField";

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

    const newValues = [...inputFields.values];
    newValues[newIndex] = "";
    inputFields.setValues(newValues);

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
      <LevelHero level={8} hexColor="#E6302B" />
      <View className="w-full justify-center items-center mb-4">
        <Text className="text-white text-lg">
          Voor de volgende opdracht ga je na denken over een ontmoeting met een
          persoon die veel indruk op je heeft gemaakt.
        </Text>
        <Text className="text-white text-lg mt-5">
          Wat maakte deze ontmoeting zo betekenisvol?
        </Text>
        <Text className="text-white text-lg mt-5">
          Welke principes, kwaliteiten, eigenschappen zie je bij deze
          persoon/personen schrijf dat hier op
        </Text>
      </View>
      <View className="w-full justify-center items-center">
        {inputFields?.fields &&
          inputFields.fields.map((item, index) => (
            <View key={index} className="mb-4 w-full">
              {item}
            </View>
          ))}
        <IconButton
          handlePress={addInputField}
          icon={require("@/assets/images/plus-white.png")}
        />
      </View>
    </View>
  );
};

const DescriptionStep = () => {
  // Add state to track the input value
  const [inputValue, setInputValue] = useState("");

  return (
    <View className="my-5">
      <Text className="text-lg text-white">
        Zoek iemand in je professionele context en iemand in je persoonlijke
        omgeving die je om een bepaalde redenen bewondert.
      </Text>
      <Text className="text-lg text-white mt-5">
        Breng deze persoon in kaart op drie niveaus: wat zijn de overtuigingen,
        kwaliteiten en het concrete gedrag van deze persoon
      </Text>
      <InputField
        fullHeight
        placeholder="Vul hier de overtuigingen in"
        value={inputValue}
        onChangeText={setInputValue}
      />
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
      Betekenisvolle ontmoetingen
    </Text>
    <Text className="text-white">
      Je hebt level 8 afgerond en hebt nagedacht over wat jou inspireert in
      anderen.
    </Text>
  </View>
);

export default function level8Config(
  features?: Partial<LevelFeatures>
): LevelConfig {
  return {
    levelName: "Challenge 2",
    levelDescription: "Level 8: Betekenisvolle ontmoetingen",
    features: {
      inputFields: features?.inputFields,
    },
    steps: [
      {
        id: 1,
        component: <InputFieldStep inputFields={features?.inputFields} />,
      },
      { id: 2, component: <DescriptionStep /> },
      {
        id: 3,
        component: <CompletionStep />,
      },
    ],
  };
}
