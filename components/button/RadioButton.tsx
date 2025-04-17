import { COLORS } from "@/consts";
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export const RadioButton = ({
  isChecked,
  toggleChecked,
  id,
}: {
  isChecked: boolean;
  toggleChecked: (id: string) => void;
  id: string;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleChecked(id)}
    >
      {isChecked ? <View style={styles.dot} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.BLACK,
    borderRadius: 100,
    borderWidth: 1,
  },
  dot: {
    width: 18,
    height: 18,
    backgroundColor: COLORS.BLACK,
    borderColor: COLORS.BLACK,
    borderRadius: 100,
  },
});
