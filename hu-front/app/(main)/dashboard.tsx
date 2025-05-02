import { router } from "expo-router";
import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { View, Text, Button } from "react-native";


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

      <Button
        title="To Inleiding Level 1"
        onPress={() => {
          router.push("/levels/inleiding-level1");
        }}
      />
      <Button
        title="To Inleiding Level 2"
        onPress={() => {
          router.push("/levels/inleiding-level2");
        }}
      />
      <Button
        title="To level 4"
        onPress={() => {
          router.push("/levels/level4");
        }}
      />

    </View>
  );
};

export default Dashboard;