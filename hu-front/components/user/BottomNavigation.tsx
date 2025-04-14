import React from "react";
import { View, Text } from "react-native";

export function BottomNavigation() {
  const icons = ["💬", "🗺️", "🔔", "🙆"];

  return (
    <View className="flex-row justify-around items-center bg-gray-800 py-4">
      {icons.map((icon, index) => (
        <Text key={index} className="text-white text-lg">
          {icon}
        </Text>
      ))}
    </View>
  );
}