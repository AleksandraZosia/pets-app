import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { COLORS } from "@/consts";

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
          <View
            style={{
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
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
                alignContent: "center",
              }}
            >
              {canGoBack && (
                <Pressable
                  onPress={() => router.back()}
                  hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
                >
                  <Text style={styles.text}>{`<`}</Text>
                </Pressable>
              )}

              <Text style={styles.text}>{title}</Text>
            </View>
            {HeaderRightTitle ? (
              <Pressable onPress={handleHeaderRightPress}>
                <Text style={styles.text}>{HeaderRightTitle}</Text>
              </Pressable>
            ) : null}
          </View>
        ),
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.BLACK,
    fontWeight: 400,
    fontSize: 24,
    fontFamily: "Lalezar-Regular",
    letterSpacing: 0,
  },
});
