import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";
import useAuthStore from "@/AuthStore";
import { SafeAreaView } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {});

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}
