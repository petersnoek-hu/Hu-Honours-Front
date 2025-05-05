import { Stack, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import Map from "../../components/svg/map";
import Chat from "../../components/svg/chat";
import Notifications from "../../components/svg/notifications";
import User from "../../components/svg/user";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#2B2B2B",
            borderTopWidth: 0,
            height: 94,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarActiveBackgroundColor: "#3A3A3A",
        }}
      >
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ focused }) => <Chat />,
          }}
        />

        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarIcon: ({ focused }) => <Map />,
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ focused }) => <Notifications />,
          }}
        />

        <Tabs.Screen
          name="user"
          options={{
            tabBarIcon: ({ focused }) => <User />,
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
