import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, ScrollView, View } from "react-native";
import Level from "../../components/dashboard/Level";
import Divider from "../../components/dashboard/Divider";
import Notification from "../../components/dashboard/Notificatiebalk";
import Achievements from "../../components/dashboard/Achievementbalk";

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1">
      <Achievements streak={5} badges={1}/>
      <Notification level={1}/>
      <ScrollView className="flex-col-reverse p-4">
        <Level level={3} titel="Level 3" handlePress={() => {
          router.push("/levels/level4");
        }}/>
      <Divider challenge="Inleiding"/>
        <Level level={2} titel="Jouw verhaal in beeld" handlePress={() => {
          router.push("/levels/inleiding-level2");
        }}/>
        <Level level={1} titel="Eerste stappen" handlePress={() => {
          router.push("/levels/inleiding-level1");
        }}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;