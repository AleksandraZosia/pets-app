import { COLORS } from "@/consts";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  title,
  onPress,
  type = "primary",
}: {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary";
}) => {
  return (
    <TouchableOpacity
      style={type === "primary" ? styles.button : styles.buttonSecondary}
      onPress={onPress}
    >
      <Text
        style={
          type === "primary" ? styles.buttonText : styles.buttonSecondaryText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.BLACK,
    padding: 10,
    borderRadius: 100,
    paddingHorizontal: 19,
    paddingVertical: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: "400",
  },
  buttonSecondary: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 100,
    paddingHorizontal: 19,
    paddingVertical: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  buttonSecondaryText: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: "400",
  },
});
