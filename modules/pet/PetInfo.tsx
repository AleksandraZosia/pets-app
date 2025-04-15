import { Button, PetAvatar } from "@/components";
import { COLORS } from "@/consts";
import { View, Text, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";

interface IPetInfo {
  petName: string;
  Icon: React.FC<SvgProps>;
  petPhoto: string;
  onAddEvent: () => void;
  onAddDocument: () => void;
}

export const PetInfo = ({
  petName,
  Icon,
  petPhoto,
  onAddDocument,
  onAddEvent,
}: IPetInfo) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.petContainer}>
        <PetAvatar petPhoto={petPhoto} size={99} bgHeight={121} bgWidth={129} />
        <View style={styles.petInfo}>
          <View style={styles.petNameContainer}>
            <Text style={styles.petName}>{petName}</Text>
            <Icon />
          </View>
          <Text style={[styles.petName, styles.petAge]}>2 lata</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="+ Dodaj wydarzenie" onPress={onAddEvent} />
        <Button title="+ Dodaj dokument" onPress={onAddDocument} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingInline: 16,
    backgroundColor: COLORS.WHITE,
  },
  petContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 33,
    paddingBottom: 53,
    gap: 27,
  },
  petInfo: {},
  petNameContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  petName: {
    fontSize: 24,
    alignItems: "center",
    fontFamily: "Lalezar-Regular",
  },
  petAge: {
    fontSize: 20,
    color: COLORS.BLACK_SECONDARY,
  },
  buttonWrapper: {
    gap: 16,
    paddingBottom: 32,
  },
});
