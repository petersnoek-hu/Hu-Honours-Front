import BaseLevel from "@/components/BaseLevel";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { ReactElement, useState, useCallback } from "react";
import { levelConfigs } from "@/configs/level-configs";
import { View } from "react-native";
import { features } from "process";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelConfig = levelConfigs[Number(id)];

  const [inputFields, setInputFields] = useState<ReactElement[]>([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  if (!levelConfig) {
    return null;
  }

  const features = {
    ...(levelConfig.toString().includes("checklist") && {
      checklist: {
        items: [],
        checkedItems,
        handleCheck: (index: number) => {
          setCheckedItems((prev) =>
            prev.map((checked, i) => (i === index ? !checked : checked))
          );
        },
      },
    }),
    ...(levelConfig.toString().includes("inputFields") && {
      inputFields: {
        fields: inputFields,
        setFields: setInputFields,
      },
    }),
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BaseLevel config={levelConfig(features)} />
    </>
  );
}
