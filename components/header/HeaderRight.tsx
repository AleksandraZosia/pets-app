import { COLORS } from "@/consts";
import { Pressable, Text, StyleSheet } from "react-native";

export const HeaderRight = ({
  headerRightTitle,
  handleHeaderRightPress,
}: {
  headerRightTitle: string;
  handleHeaderRightPress?: () => void;
}) => {
  return (
    <Pressable onPress={handleHeaderRightPress}>
      <Text style={styles.text}>{headerRightTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.GRAY_SOFT,
    fontWeight: 400,
    fontSize: 24,
    fontFamily: "Lalezar-Regular",
    letterSpacing: 0,
  },
});
