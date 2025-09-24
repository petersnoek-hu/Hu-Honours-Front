import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";
import useAuthStore from "@/AuthStore";
import { View, Text, StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {});

  return (
    <>
      <LocalAdminBanner />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="dashboard" />
      </Stack>

      <StatusBar style="auto" />
    </>
  );
}

function LocalAdminBanner() {
  const { token } = useAuthStore();
  if (token !== "local-admin-token") return null;
  return (
    <View style={styles.banner} pointerEvents="none">
      <Text style={styles.bannerText}>Local admin mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#8B5CF6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    zIndex: 9999,
    alignItems: "center",
  },
  bannerText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
