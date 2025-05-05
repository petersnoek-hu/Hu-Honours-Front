import React from "react";
import { View, Text, ScrollView, Platform, StatusBar } from "react-native";
import { BadgeList } from "../../components/user/BadgeList";

export default function AllBadges() {
  return (
    <View
      className="flex-1 bg-gray-900"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="flex items-left justify-between px-4 py-4">
        <Text className="text-white text-lg font-bold">Alle Badges</Text>
      </View>
      <ScrollView className="flex-1">
        <BadgeList />
      </ScrollView>
    </View>
  );
}
