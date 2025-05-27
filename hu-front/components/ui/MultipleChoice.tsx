import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type MultipleChoiceProps = {
  items: string[];
  onSelect: (index: number) => void;
  selected: boolean[];
  selectedColor?: string;
  selectedTextColor?: string;
}

const MultipleChoice = ({items, onSelect, selected, selectedColor, selectedTextColor}: MultipleChoiceProps) => {
  return (
    <View className="w-full">
      {items.map((item,index) => {
        const isSelected = selected[index];
      
      return(
        <View key={index} className="mb-4">
          <TouchableOpacity 
            className={`rounded-3xl px-4 py-2 ${
              isSelected ? selectedColor : "bg-gray-300"
              }`}
            onPress={() => onSelect(index)}
            >
            <Text 
              className={`text-lg font-medium ${
                isSelected ? selectedTextColor : "color-gray-900"}
              `}>
              {item}
            </Text>
          </TouchableOpacity>
        </View>
        );
    })}
    </View>
  );
};

export default MultipleChoice;
