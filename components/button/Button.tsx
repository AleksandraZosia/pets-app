import { Colors } from "@/assets/colors/colors";
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
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 100,
    paddingHorizontal: 19,
    paddingVertical: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "400",
  },
  buttonSecondary: {
    backgroundColor: Colors.white,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 100,
    paddingHorizontal: 19,
    paddingVertical: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonSecondaryText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: "400",
  },
});
