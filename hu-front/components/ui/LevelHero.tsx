import React from "react";
import { Text, View } from "react-native";

type LevelHeroProps = {
  level: number;
  color?: string;
  hexColor?: string;
};

const LevelHero = ({ level, color, hexColor }: LevelHeroProps) => {
  return (
    <View
      className={`${color} p-5 rounded-3xl mb-5`}
      style={hexColor ? { backgroundColor: hexColor } : undefined}
    >
      <Text className="text-white text-xl font-bold">
        Lees hoofdstuk {level} uit het boek van Covey
      </Text>
    </View>
  );
};

export default LevelHero;
