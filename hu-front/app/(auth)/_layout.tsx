import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="inloggen" />
        <Stack.Screen name="aanmelden" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
