import React from "react";
import { RealmProvider } from "@realm/react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import Pet from "@/models/pets/pet";
import Event from "@/models/events/event";
import Document from "@/models/documents/document";
import CalendarGroup from "@/models/events/eventsInCalendar";

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
      <RealmProvider
        deleteRealmIfMigrationNeeded
        schema={[Pet, Event, Document, CalendarGroup]}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </RealmProvider>
    </SafeAreaProvider>
  );
}
