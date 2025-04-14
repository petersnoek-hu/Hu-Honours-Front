import React from "react";
import { View } from "react-native";
import { BadgeCard } from "./BadgeCard";

export function BadgeList({ limit }: { limit?: number }) {
  const badges = [
    { id: 1, color: "bg-green-500" },
    { id: 2, color: "bg-blue-500" },
    { id: 3, color: "bg-red-500" },
    { id: 4, color: "bg-green-500" },
    { id: 5, color: "bg-blue-500" },
    { id: 6, color: "bg-red-500" },
    { id: 7, color: "bg-green-500" },
    { id: 8, color: "bg-blue-500" },
    { id: 9, color: "bg-red-500" },
  ];

    // Beperk het aantal badges als een limiet is opgegeven
    const visibleBadges = limit ? badges.slice(0, limit) : badges;

    return (
      <View className="flex-wrap flex-row justify-between mt-4">
        {visibleBadges.map((badge) => (
          <BadgeCard key={badge.id} color={badge.color} />
        ))}
      </View>
    );
  }