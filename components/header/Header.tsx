import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { COLORS } from "@/consts";
import { HeaderRight } from "./HeaderRight";

export const Header = ({
  title,
  canGoBack,
  HeaderRightTitle,
  handleHeaderRightPress,
}: {
  title: string;
  canGoBack?: boolean;
  HeaderRightTitle?: string;
  handleHeaderRightPress?: () => void;
}) => {
  return (
    <Stack.Screen
      options={{
        headerShown: true,
        header: () => (
          <View style={styles.headerContainer}>
            <View style={styles.headerLeftContainer}>
              {canGoBack && (
                <Pressable onPress={() => router.back()} hitSlop={14}>
                  <Text style={styles.text}>{`<`}</Text>
                </Pressable>
              )}

              <Text style={styles.text}>{title}</Text>
            </View>
            {HeaderRightTitle ? (
              <HeaderRight
                headerRightTitle={HeaderRightTitle}
                handleHeaderRightPress={handleHeaderRightPress}
              />
            ) : null}
          </View>
        ),
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.YELLOW_BACKGROUND,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 21,
    paddingHorizontal: 12,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    alignContent: "center",
  },
  text: {
    color: COLORS.BLACK,
    fontWeight: 400,
    fontSize: 24,
    fontFamily: "Lalezar-Regular",
    letterSpacing: 0,
  },
});
