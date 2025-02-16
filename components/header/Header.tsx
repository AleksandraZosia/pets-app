import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "@/assets/colors/colors";

export const Header = ({
  title,
  canGoBack,
}: {
  title: string;
  canGoBack?: boolean;
}) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitle: title,
        headerTitleStyle: {
          color: Colors.black,
          fontWeight: 400,
          fontSize: 24,
          fontFamily: "Lalezar-Regular",
        },
        headerStyle: { backgroundColor: Colors.yellowBackground },
        headerBackVisible: !!canGoBack,
      }}
    />
  );
};
