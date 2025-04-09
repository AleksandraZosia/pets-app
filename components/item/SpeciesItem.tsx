import { COLORS } from "@/consts/colors";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { SvgProps } from "react-native-svg";
interface SpeciesItemProps {
  name: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  isSelected: boolean;
}

export const SpeciesItem = ({
  name,
  Icon,
  onPress,
  isSelected,
}: SpeciesItemProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={
          isSelected
            ? [styles.iconContainer, styles.selected]
            : styles.iconContainer
        }
      >
        <Icon fill={COLORS.YELLOW_SECONDARY} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  selected: {
    borderColor: COLORS.YELLOW_SECONDARY,
    borderWidth: 3,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.YELLOW_BACKGROUND,
    borderColor: COLORS.YELLOW_BACKGROUND,
    borderWidth: 3,
  },
  name: {
    fontSize: 14,
    color: COLORS.BLACK_SECONDARY,
    textAlign: "center",
  },
});
