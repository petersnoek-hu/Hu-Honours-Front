import { Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useEffect } from "react";

import Map from "../../components/svg/map";
import Chat from "../../components/svg/chat";
import Notifications from "../../components/svg/notifications";
import User from "../../components/svg/user";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {});

  return (
    <>
      <Tabs 
        screenOptions={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#2B2B2B", // Donkere achtergrond
            borderTopWidth: 0,
            height: 94, // Maak het wat hoger zoals je screenshot
          },
          tabBarIconStyle: {
            marginTop: 8,
          },
          tabBarItemStyle: {
            borderRadius: 15,
          },
          tabBarActiveBackgroundColor: "#3A3A3A",
        }}>
                
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ focused }) => (
              <Chat />
            ),
          }}
        />

        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarIcon: ({ focused }) => (
              <Map />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ focused }) => (
              <Notifications />
            ),
          }}
        />   

        <Tabs.Screen
          name="user"
          options={{
            tabBarIcon: ({ focused }) => (
              <User />
            ),
          }}
        />

      </Tabs>

      <StatusBar style="auto" />
    </>
  );
}
