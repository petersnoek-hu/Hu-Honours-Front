import React from "react";
import { SafeAreaView, Text, ScrollView, View } from "react-native";
import Level from "../../components/dashboard/Level";
import Popup from "../../components/dashboard/Level-Popup";

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <ScrollView className="w-100 flex-col-reverse p-4">
        <Level level={2}/>
        <Level level={1}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
