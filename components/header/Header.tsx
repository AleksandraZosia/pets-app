import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "@/consts";

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
          color: COLORS.BLACK,
          fontWeight: 400,
          fontSize: 24,
          fontFamily: "Lalezar-Regular",
        },
        headerStyle: { backgroundColor: COLORS.YELLOW_BACKGROUND },
        headerBackVisible: !!canGoBack,
      }}
    />
  );
};
