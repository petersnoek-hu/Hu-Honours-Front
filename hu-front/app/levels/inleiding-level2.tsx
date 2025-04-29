import LevelHeader from "@/components/ui/LevelHeader";
import React from "react";
import { SafeAreaView, View } from "react-native";

const InleidingLevel2 = () => {
  return (
    <SafeAreaView className="flex-1 pt-[40] px-[20] bg-[#333333]">
      <View className="flex-1 w-full bg-[#333333]">
        <LevelHeader
          barProgression={0.1}
          handleBackPress={() => {
            console.log("lala");
          }}
          levelName="Inleiding"
          levelDescription="Level 2: jouw verhaal in beeld"
        />
      </View>
    </SafeAreaView>
  );
};

export default InleidingLevel2;
