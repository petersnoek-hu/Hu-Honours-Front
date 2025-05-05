import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BadgeList } from "../../components/user/BadgeList";
import { UserHeader } from "../../components/user/UserHeader";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

type UserProps = {
  username: string;
  streak: number;
};

export default function User({ username, streak }: UserProps) {
  const navigation = useNavigation<NavigationProp<{ allbadges: undefined }>>();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View className="flex-1 bg-gray-900 pt-10">
      <UserHeader />

      <View className="flex-1 px-4">
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-white text-lg font-bold">Badges</Text>
          <TouchableOpacity onPress={() => navigation.navigate("allbadges")}>
            <Text className="text-white text-sm font-bold flex-row items-center">
              Alle badges {">"}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          className="rounded-lg mt-4 p-4"
          style={{
            borderWidth: 2,
            borderColor: "#4D4D4D",
            borderRadius: 16,
          }}
        >
          <BadgeList limit={isExpanded ? undefined : 3} />
          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            style={{ marginTop: 8 }}
          >
            <Text className="text-white text-center font-bold">
              {isExpanded ? "Minder badges" : "Meer badges"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
