import React from "react";
import { View, Text, Image } from "react-native";

export function UserHeader() {
  return (
    <View className="flex items-left justify-between px-4 py-4">
      <View className="flex-row items-center">
        <Image
          source={require("../../assets/user/streak.png")}
          className="w-12 h-12 rounded-full"
        />
        <Text className="text-orange-500 font-bold text-sm ml-2">36</Text>
      </View>
      
      <View className="flex items-center py-10">
        <Image
          source={require("../../assets/user/avatar.png")}
          className="w-50 h-50"
        />
        <Text className="text-white text-lg font-bold py-4">Username</Text>
      </View>
    </View>
  );
}