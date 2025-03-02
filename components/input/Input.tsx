import { TextInput, StyleSheet, View } from "react-native";
import { COLORS } from "@/consts";

export const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Wpisz nazwę wydarzenia"
        placeholderTextColor={COLORS.GRAY_SOFT}
        selectionColor={COLORS.YELLOW_MAIN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_SOFT,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 12,
    paddingVertical: 16,
    fontSize: 15,
    fontWeight: "400",
    color: COLORS.BLACK,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Roboto-Regular",
    color: COLORS.BLACK,
  },
});
