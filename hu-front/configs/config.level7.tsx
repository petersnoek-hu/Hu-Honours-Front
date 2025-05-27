import React from "react";
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
      <LevelHero level={7} hexColor="#E6302B" />
      <View className="w-full justify-center items-center mb-4">
        <Text className="text-white text-xl">
          Voor de volgende opdracht word jij een meester in het uitleggen van de
          inleiding en van het boek en de aspecten van gewoonte 1 wees pro
          actief!
        </Text>
        <Text className="text-white text-xl mt-5">
          Doe alsof je je het uitlegt aan iemand die nog nooit de cursus heeft
          gedaan door middel van een voorbeeld uit je eigen leven
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

export default function level7Config(
  features?: Partial<LevelFeatures>
): LevelConfig {
  return {
    levelName: "Cirkel van betrokkenheid",
    levelDescription: "Level 7: De cirkel van betrokkenheid",
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
