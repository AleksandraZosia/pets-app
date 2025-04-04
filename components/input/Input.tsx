import { TextInput, StyleSheet, View, Text } from "react-native";
import { COLORS } from "@/consts";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  asTextArea?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  asTextArea = false,
}: InputProps) => {
  return (
    <View style={{ flexDirection: "column", gap: 8 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={asTextArea ? [styles.textArea, styles.input] : styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_SOFT}
          selectionColor={COLORS.YELLOW_MAIN}
          value={value}
          onChangeText={onChangeText}
          multiline={asTextArea}
        />
      </View>
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
  label: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: COLORS.BLACK,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Roboto-Regular",
    color: COLORS.BLACK,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
