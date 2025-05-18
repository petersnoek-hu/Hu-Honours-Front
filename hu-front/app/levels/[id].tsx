import BaseLevel from "@/components/BaseLevel";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { ReactElement, useState, useCallback } from "react";
import { levelConfigs } from "@/configs/level-configs";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelConfig = levelConfigs[Number(id)];
  const [inputFields, setInputFields] = useState<ReactElement[]>([]);

  const handleSetFields = useCallback((newFields: ReactElement[]) => {
    setInputFields(newFields);
  }, []);

  if (!levelConfig) return null;

  const features = {
    inputFields: {
      fields: inputFields,
      setFields: handleSetFields,
    },
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BaseLevel config={levelConfig(features)} />
    </>
  );
}
