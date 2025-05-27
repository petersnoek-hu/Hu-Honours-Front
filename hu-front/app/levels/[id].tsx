import BaseLevel from "@/components/BaseLevel";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { ReactElement, useCallback, useState } from "react";
import { levelConfigs } from "@/configs/level-configs";

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const levelConfig = levelConfigs[Number(id)];
  const [inputFields, setInputFields] = useState<ReactElement[]>([]);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleSetFields = useCallback((newFields: ReactElement[]) => {
    setInputFields(newFields);
  }, []);

  if (!levelConfig) return null;

  const handleCheck = (index: number) => {
    setCheckedItems((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <BaseLevel
        config={levelConfig({
          checklist: {
            items: [],
            checkedItems,
            handleCheck: handleCheck,
          },
          inputFields: {
            fields: inputFields,
            setFields: setInputFields,
            values: inputValues,
            setValues: setInputValues,
          },
        })}
      />
    </>
  );
}
