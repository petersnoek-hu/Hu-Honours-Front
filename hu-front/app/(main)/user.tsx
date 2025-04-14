import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserHeader } from "../components/user/UserHeader";


export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Username</Text>
      <Text style={styles.text}>Badges</Text>
      <Text style={styles.text}>Alle badges</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});