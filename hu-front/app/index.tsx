import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import "../global.css";
import { router } from "expo-router";

const App = () => {
  useEffect(() => {
    // Redirect to auth if someone lands on index page
    const timer = setTimeout(() => {
      router.replace("/(auth)/sign-in");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "white",
  },
});

export default App;
