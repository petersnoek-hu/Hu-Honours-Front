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
      <ScrollView className="flex-col-reverse p-4">\
        <Level level={3}/>
      <Divider challenge={1}/>
        <Level level={2}/>
        <Level level={1}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
