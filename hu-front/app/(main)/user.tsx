import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { BadgeList } from "../../components/user/BadgeList";
import { UserHeader } from "../../components/user/UserHeader";
import { BottomNavigation } from "../../components/user/BottomNavigation";
import { useNavigation } from "expo-router";


export default function User() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-900 pt-10">
      <UserHeader />
      <View className="flex-1 px-4">
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-white text-lg font-bold">Badges</Text>
          <TouchableOpacity onPress={() => navigation.navigate("allbadges")}>
            <Text className="text-white text-sm font-bold flex-row items-center">
              Alle badges <Text className="text-white">{">"}</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-lg mt-4 p-4" style={{borderWidth: 4, borderColor: "#4D4D4D", borderRadius: 16,}}>
          <BadgeList limit={3}/> {/* Toon alleen de eerste 3 badges */}
        </View>
      </View>
      <BottomNavigation />
    </View>
  );
}