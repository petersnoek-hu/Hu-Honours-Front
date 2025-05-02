import React from "react";
import { View, Text } from "react-native";
import Avatar from "../../assets/user/avatar.svg";
import Streak from "../../assets/user/streak.svg";

export function UserHeader() {
  return (
    <View className="flex items-left justify-between px-4 py-4">
      {/* Streak en nummer */}
      <View className="flex-row items-center">
        <Streak width={24} height={24} /> {/* SVG voor streak */}
        <Text className="text-orange-500 font-bold text-sm ml-2">36</Text>
      </View>

      {/* Avatar en username */}
      <View className="flex items-center py-10">
        <Avatar width={100} height={100} /> {/* SVG voor avatar */}
        <Text className="text-white text-lg font-bold py-4">Username</Text>
      </View>
    </View>
  );
}
