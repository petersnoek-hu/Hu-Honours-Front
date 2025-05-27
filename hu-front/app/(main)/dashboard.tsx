import React, { useRef, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Level from "../../components/dashboard/Level";
import Divider from "../../components/dashboard/Divider";
import Notification from "../../components/dashboard/Notificatiebalk";
import Achievements from "../../components/dashboard/Achievementbalk";
import { roadmap } from "../_constants/roadmap";

const Dashboard = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!hasScrolled && scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: false });
      setHasScrolled(true);
    }
  }, [hasScrolled]);

  return (
    <SafeAreaView className="flex-1 bg-[#2B2B2B]">
      <Achievements streak={5} badges={1} />
      <Notification level={1} />
      <ScrollView
        ref={scrollRef}
        className="flex-1 p-4"
        contentContainerClassName="flex-col-reverse"
      >
        {roadmap.map((item, index) => {
          if (item.type === "level") {
            const isActive = true;
            return (
              <Level
                key={index}
                level={item.level}
                titel={item.titel}
                inset={index % 2 === 0 ? "right-10" : "left-10"}
                active={isActive ? true : false}
              />
            );
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
