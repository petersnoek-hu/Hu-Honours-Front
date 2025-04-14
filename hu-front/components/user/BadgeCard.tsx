import React from "react";
import { View } from "react-native";

export function BadgeCard({ color }: { color: string }) {
  return (
    <View
      className={`w-24 h-24 ${color} rounded-full m-2 flex items-center justify-center`}
    >
      <View className="w-10 h-10 bg-white rounded-full" />
    </View>
  );
}