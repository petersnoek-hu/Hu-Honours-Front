import React, { ReactElement } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { LevelConfig } from "@/types/level.types";
import LottieView from "lottie-react-native";
import LevelHero from "@/components/ui/LevelHero";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/InputField";

const animation = require("../assets/lottie/badge-animation.json");

const InputFieldComponent = () => (
  <InputField placeholder="Test" value="Test" />
);

export default function level3Config(
  checkedItems: boolean[],
  handleCheck: (index: number) => void,
  inputFields: ReactElement[],
  setInputFields: (fields: ReactElement[]) => void
): LevelConfig {
  const addInputField = () => {
    const newFields = [
      ...inputFields,
      <InputFieldComponent key={inputFields.length} />,
    ];
    setInputFields(newFields);
  };

  return {
    levelName: "Cirkel van betrokkenheid",
    levelDescription: "Level 3: De cirkel van betrokkenheid",
    color: "bg-orange",
    steps: [
      {
        id: 1,
        component: (
          <View className="flex-1 my-5">
            <LevelHero />
            <View className="w-full justify-center items-center mb-4">
              <Text className="text-white text-xl">
                Welke drie punten uit het hoofdstuk spreken je het meeste aan?
              </Text>
            </View>
            <View className="w-full justify-center items-center">
              <ScrollView
                className="w-full h-full"
                contentContainerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {inputFields.map((item, index) => (
                  <View className="w-full" key={index}>
                    {item}
                  </View>
                ))}
                <IconButton
                  handlePress={addInputField}
                  icon={require("@/assets/images/book.png")}
                />
              </ScrollView>
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
}
