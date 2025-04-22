import { Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {});

  return (
    <>
      <Tabs 
        screenOptions={{ 
          headerShown: false,
        }}>
        
        <Tabs.Screen name="dashboard" />
      </Tabs>

      <StatusBar style="auto" />
    </>
  );
}
