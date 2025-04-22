import React from "react";
import { SafeAreaView, Text, ScrollView } from "react-native";
import Level from "../../components/dashboard/Level";
import Popup from "../../components/dashboard/Level-Popup";

const Dashboard = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F1F1F",
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Dashboard
        </Text>

        <Level />
        <Popup/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
