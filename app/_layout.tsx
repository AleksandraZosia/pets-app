import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Lalezar-Regular": require("@/assets/fonts/Lalezar-Regular.ttf"),
    "Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (error) {
    return null;
  }
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
