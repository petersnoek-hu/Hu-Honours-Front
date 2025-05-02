import React from "react";
import { View } from "react-native";
import { BadgeCard } from "./BadgeCard";
import BadgeGreen from "../../assets/badges/badge_green.svg";
import BadgeBlue from "../../assets/badges/badge_blue.svg";
import BadgeRed from "../../assets/badges/badge_red.svg";

type BadgeListProps = {
  limit?: number;
};

export function BadgeList({ limit }: BadgeListProps) {
  const badges = [
    { id: 1, icon: BadgeGreen },
    { id: 2, icon: BadgeBlue },
    { id: 3, icon: BadgeRed },
    { id: 4, icon: BadgeGreen },
    { id: 5, icon: BadgeBlue },
    { id: 6, icon: BadgeRed },
    { id: 7, icon: BadgeGreen },
    { id: 8, icon: BadgeBlue },
    { id: 9, icon: BadgeRed },
  ];

  const visibleBadges = limit ? badges.slice(0, limit) : badges;

  return (
    <View className="flex-wrap flex-row justify-between">
      {visibleBadges.map((badge) => (
        <BadgeCard key={badge.id} icon={badge.icon} />
      ))}
    </View>
  );
}