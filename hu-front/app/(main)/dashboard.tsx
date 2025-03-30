import React from "react";
import { View, Text } from "react-native";

const Dashboard = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1F1F1F",
        width: "100%",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        Dashboard
      </Text>
    </View>
  );
};

export default Dashboard;
