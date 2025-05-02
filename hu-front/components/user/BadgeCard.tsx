import React from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

type BadgeCardProps = {
  icon: React.FC<SvgProps>; // Add the icon prop
};

export function BadgeCard({ icon: Icon }: BadgeCardProps) {
  return (
    <View className="p-4 m-2 flex items-center justify-center w-24 h-24">
      <Icon width={70} height={70} /> {/* Render the SVG icon */}
    </View>
  );
}