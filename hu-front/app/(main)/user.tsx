import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BadgeList } from "../../components/user/BadgeList";
import { UserHeader } from "../../components/user/UserHeader";
import { BottomNavigation } from "../../components/user/BottomNavigation";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

type UserProps = {
  username: string;
  streak: number;
};

export default function User({ username, streak }: UserProps) {
  const navigation = useNavigation<NavigationProp<{ allbadges: undefined }>>();
  const [isExpanded, setIsExpanded] = useState(false); // State voor uitklappen/inklappen

  return (
    <View className="flex-1 bg-gray-900 pt-10">
      {/* Header */}
      <UserHeader />

      {/* Badges sectie */}
      <View className="flex-1 px-4">
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-white text-lg font-bold">Badges</Text>
          <TouchableOpacity onPress={() => navigation.navigate("allbadges")}>
            <Text className="text-white text-sm font-bold flex-row items-center">
              Alle badges {">"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Badges container */}
        <View
          className="rounded-lg mt-4 p-4"
          style={{
            borderWidth: 2,
            borderColor: "#4D4D4D",
            borderRadius: 16,
          }}
        >
          <BadgeList limit={isExpanded ? undefined : 3} /> {/* Toon alle of beperkte badges */}
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)} // Toggle de uitklapbare state
            style={{ marginTop: 8 }}
          >
            <Text className="text-white text-center font-bold">
              {isExpanded ? "Minder badges" : "Meer badges"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
}
