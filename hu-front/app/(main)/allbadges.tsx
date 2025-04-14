import React from "react";
import { View, Text } from "react-native";
import { BadgeList } from "../../components/user/BadgeList";

export default function AllBadges() {
    return (
      <View className="flex-1 bg-gray-900 px-4 pt-10">
        <Text className="text-white text-lg font-bold mb-4">Alle Badges</Text>
        <BadgeList />
      </View>
    );
  }