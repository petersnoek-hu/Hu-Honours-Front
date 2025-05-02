import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";
import useAuthStore from "@/AuthStore";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {});

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="user" />
        <Stack.Screen name="allbadges" options={{ headerShown: true, title: "Alle Badges" }} />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}
