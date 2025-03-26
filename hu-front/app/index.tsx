import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const App = () => {

  return (
    <>
      <View>
        <Text style={styles.text}>lalala</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default App;