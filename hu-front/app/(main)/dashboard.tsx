import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Dashboard = () => {
  const router = useRouter(); // Router gebruiken om te navigeren

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
      <TouchableOpacity
        onPress={() => {
          router.push("/(main)/user"); // Navigeren naar de profielpagina
        }}
      >
        <Text style={{ color: "white", marginTop: 20}}>Link naar gebruikersprofiel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;