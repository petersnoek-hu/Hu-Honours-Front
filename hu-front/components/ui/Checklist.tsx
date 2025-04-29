import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type ChecklistProps = {
  items: string[];
  onCheck: (index: number) => void;
  checkedItems: boolean[];
};

const Checklist = ({ items, onCheck, checkedItems }: ChecklistProps) => {
  return (
    <View className="flex-1">
      {items.map((item, index) => (
        <View
          key={index}
          className="flex-row justify-between items-center mb-4 w-full"
        >
          <Text className="text-white">{item}</Text>
          <View className="flex-row items-center justify-center p-1 w-[40] h-[40] bg-white rounded-full">
            <TouchableOpacity
              className={`w-[30] h-[30] rounded-full ${
                checkedItems[index] ? "bg-blue" : "bg-white"
              }`}
              onPress={() => onCheck(index)}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Checklist;
