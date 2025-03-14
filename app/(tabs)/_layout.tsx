import { Tabs } from "expo-router";
import { COLORS } from "@/consts";
import PetsIcon from "@/assets/icons/paw.svg";
import StartIcon from "@/assets/icons/rocket.svg";
import { TabBarButton, TabBarLabel, DocumentsIcon } from "@/components";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.WHITE,
        tabBarActiveBackgroundColor: COLORS.YELLOW_SECONDARY,
        tabBarInactiveBackgroundColor: COLORS.YELLOW_MAIN,
        tabBarStyle: {
          backgroundColor: COLORS.YELLOW_MAIN,
          height: 80,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Start",
          tabBarIcon: () => <StartIcon />,
          tabBarButton: (props) => {
            return (
              <TabBarButton onPress={props.onPress} style={props.style}>
                {props.children}
              </TabBarButton>
            );
          },
          tabBarLabel: (props) => {
            return <TabBarLabel>{props.children}</TabBarLabel>;
          },
        }}
      />
      <Tabs.Screen
        name="[pets]/index"
        options={{
          title: "Zwierzaki",
          tabBarIcon: () => <PetsIcon />,
          tabBarButton: (props) => {
            return (
              <TabBarButton
                onPress={props.onPress}
                to={props.href}
                style={props.style}
              >
                {props.children}
              </TabBarButton>
            );
          },
          tabBarLabel: (props) => {
            return <TabBarLabel>{props.children}</TabBarLabel>;
          },
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: "Dokumenty",
          tabBarIcon: () => <DocumentsIcon />,
          tabBarButton: (props) => {
            return (
              <TabBarButton onPress={props.onPress} style={props.style}>
                {props.children}
              </TabBarButton>
            );
          },
          tabBarLabel: (props) => {
            return <TabBarLabel>{props.children}</TabBarLabel>;
          },
        }}
      />

      <Tabs.Screen name="[pets]/[pet]/[petId]/index" options={{ href: null }} />
    </Tabs>
  );
}
