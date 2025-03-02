import { TextInput, StyleSheet, View, Text, Pressable } from "react-native";
import DocumentIcon from "@/assets/icons/file.svg";
import { COLORS } from "@/consts";

interface DateTimePickerProps {
  label: string;
  placeholder?: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  readOnly?: boolean;
  value?: string;
}

export const DateTimePicker = ({
  label,
  placeholder,
  onPress,
  readOnly = false,
  value,
  onChangeText,
}: DateTimePickerProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.container} onPress={onPress}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_SOFT}
          selectionColor={COLORS.YELLOW_MAIN}
          readOnly={readOnly}
          value={value}
          editable={!readOnly}
          onChangeText={onChangeText}
        />
        <DocumentIcon fill={COLORS.BLACK} width={20} height={20} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
    flex: 1,
  },
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
