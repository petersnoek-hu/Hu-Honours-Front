import BaseLevel from "@/components/BaseLevel";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { levelConfigs } from "@/configs/level-configs";

const Level = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelConfig = levelConfigs[Number(id)];

  if (!levelConfig) {
    return null;
  }

  //const levelConfig = require(`@/configs/level${id}.config`).default;
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleCheck = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BaseLevel config={levelConfig(checkedItems, handleCheck)} />
    </>
  );
};

export default Level;
