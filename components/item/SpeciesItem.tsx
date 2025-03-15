import { COLORS } from "@/consts/colors";
import { View, Text, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon fill={!isSelected ? COLORS.YELLOW_SECONDARY : COLORS.WHITE} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  iconContainer: {
    padding: 26,
    borderRadius: 100,
    backgroundColor: COLORS.YELLOW_BACKGROUND,
  },
  name: {
    fontSize: 14,
    color: COLORS.BLACK_SECONDARY,
  },
});
