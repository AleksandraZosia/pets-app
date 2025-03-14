import { COLORS } from "@/consts";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { usePathname } from "expo-router";
import { useMemo } from "react";
export const TabBarButton = ({
  to,
  children,
  onPress,
  style,
}: {
  to?: string;
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  style: StyleProp<ViewStyle>;
}) => {
  const path = usePathname();

  const additionalActiveStyle = useMemo(() => {
    if (to && path.includes("pet")) {
      return { backgroundColor: COLORS.YELLOW_SECONDARY };
    }
    return {};
  }, [to, path]);

  return (
    <Pressable
      style={[style, styles.tab, additionalActiveStyle]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 9.5,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 4,
  },
});
