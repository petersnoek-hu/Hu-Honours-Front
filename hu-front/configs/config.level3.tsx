import React, { ReactElement, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LevelConfig, LevelFeatures } from "@/types/level.types";
import LottieView from "lottie-react-native";
import LevelHero from "@/components/ui/LevelHero";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/InputField";
import { createLevel } from "./createLevel";

const animation = require("../assets/lottie/badge-animation.json");

const InputFieldComponent = ({
  index,
  value,
  onChange,
}: {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
}) => (
  <InputField
    placeholder="Type your answer here..."
    value={value}
    onChangeText={(text) => onChange(index, text)}
  />
);

const InputFieldsList = ({
  features,
}: {
  features: Partial<LevelFeatures>;
}) => {
  const [fieldValues, setFieldValues] = useState<string[]>([]);

  const handleChange = (index: number, value: string) => {
    setFieldValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  const addInputField = () => {
    if (features.inputFields?.setFields && features.inputFields?.fields) {
      const newIndex = features.inputFields.fields.length;
      const newFields = [
        ...features.inputFields.fields,
        <InputFieldComponent
          key={newIndex}
          index={newIndex}
          value={fieldValues[newIndex] || ""}
          onChange={handleChange}
        />,
      ];
      features.inputFields.setFields(newFields);
      setFieldValues((prev) => [...prev, ""]);
    }
  };

  return (
    <ScrollView
      className="w-full h-full"
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {features.inputFields?.fields?.map((_, index) => (
        <View className="w-full" key={index}>
          <InputFieldComponent
            index={index}
            value={fieldValues[index] || ""}
            onChange={handleChange}
          />
        </View>
      ))}
      <IconButton
        handlePress={addInputField}
        icon={require("@/assets/images/book.png")}
      />
    </ScrollView>
  );
};

const level3Base = {
  levelName: "Cirkel van betrokkenheid",
  levelDescription: "Level 3: De cirkel van betrokkenheid",
  color: "bg-orange",
  steps: [
    {
      id: 1,
      component: (features: Partial<LevelFeatures>) => (
        <View className="flex-1 my-5">
          <LevelHero />
          <View className="w-full justify-center items-center mb-4">
            <Text className="text-white text-xl">
              Welke drie punten uit het hoofdstuk spreken je het meeste aan?
            </Text>
          </View>
          <View className="w-full justify-center items-center">
            <InputFieldsList features={features} />
          </View>
        </View>
      ),
    },
    {
      id: 2,
      component: (
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
      ),
    },
  ],
};

export default createLevel(level3Base, (features) => ({
  inputFields: {
    fields: features.inputFields?.fields ?? [],
    setFields: features.inputFields?.setFields ?? (() => {}),
  },
}));
