import { COLORS } from "@/consts";
import { Text, StyleSheet } from "react-native";

export const TabBarLabel = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.WHITE,
    fontFamily: "Lalezar-Regular",
  },
});
