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
<<<<<<< HEAD
        {roadmap.map((item, index) => {
          if (item.type === "level") {
            return <Level key={index} level={item.level} titel={item.titel} />;
          } else if (item.type === "divider") {
            return <Divider key={index} challenge={item.challenge} />;
          }
          return null;
        })}
=======
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
>>>>>>> 7571bbf4cc8e0ab7baffb95a86d5c54d34932740
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
