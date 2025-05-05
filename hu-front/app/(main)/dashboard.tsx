import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Level from "../../components/dashboard/Level";
import Divider from "../../components/dashboard/Divider";
import Notification from "../../components/dashboard/Notificatiebalk";
import Achievements from "../../components/dashboard/Achievementbalk";
import { roadmap } from "../_constants/roadmap";

const Dashboard = () => {
  return (
    <SafeAreaView className="flex-1">
      <Achievements streak={5} badges={1} />
      <Notification level={1} />
      <ScrollView className="flex-col-reverse p-4">
        {roadmap.map((item, index) => {
          if (item.type === "level") {
            return <Level key={index} level={item.level} titel={item.titel} />;
          } else if (item.type === "divider") {
            return <Divider key={index} challenge={item.challenge} />;
          }
          return null;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
