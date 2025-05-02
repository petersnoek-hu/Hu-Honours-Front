import React from "react";
import { View, Text, Image } from "react-native";
// import Avatar from "../../assets/user/avatar.png";
// import Streak from "../../assets/user/streak.png";

export function UserHeader() {
  const Streak = require("../../assets/user/streak.png"); // PNG afbeelding voor streak
  const Avatar = require("../../assets/user/avatar.png"); // PNG afbeelding voor avatar
  return (
    <View className="flex items-left justify-between px-4 py-4">
      <View className="flex-row items-center">
        <Image source={Streak} width={24} height={24} />
        <Text className="text-orange-500 font-bold text-sm ml-2">36</Text>
      </View>
      <View className="flex items-center py-10">
        <Image source={Avatar} width={100} height={100} /> 
        <Text className="text-white text-lg font-bold py-4">Username</Text>
      </View>
    </View>
  );
}
