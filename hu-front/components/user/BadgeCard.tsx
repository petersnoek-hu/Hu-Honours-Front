import React from "react";
import { View, Image } from "react-native";

type BadgeCardProps = {
  icon: any; // PNG afbeelding
};

export function BadgeCard({ icon }: BadgeCardProps) {
  return (
    <View className="p-4 m-2 flex items-center justify-center w-24 h-24">
      <Image source={icon} style={{ width: 70, height: 70 }} />
    </View>
  );
}