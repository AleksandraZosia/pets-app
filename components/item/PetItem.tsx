import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import DogIcon from "../../assets/icons/dog.svg";
import { COLORS } from "@/consts";
import { useCallback } from "react";
import { SvgProps } from "react-native-svg";
interface PetItemProps {
  onPress: () => void;
  petPhoto: string;
  petName: string;
  petAge: number;
  Icon: React.FC<SvgProps>;
}

export const PetItem = ({
  onPress,
  petPhoto,
  petName,
  petAge,
  Icon,
}: PetItemProps) => {
  const formattedPetAge = useCallback(() => {
    if (petAge === 1) {
      return "1 rok";
    }
    if (petAge > 1 && petAge < 5) {
      return `${petAge} lata`;
    }
    return `${petAge} lat`;
  }, [petAge]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.petContainer}>
        <View style={styles.petAvatar}>
          <ImageBackground
            source={require("../../assets/images/pet-background.png")}
            style={{
              width: 83,
              height: 78,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="cover"
          >
            {/* TODO: it should be a source={uri: petPhoto}, once there is access to the device storage */}
            <Image
              source={petPhoto}
              style={{ width: 64, height: 64 }}
              resizeMode="cover"
            />
          </ImageBackground>
        </View>
        <View style={styles.petInfo}>
          <Text style={styles.petName}>{petName}</Text>
          <Text style={styles.petAge}>{formattedPetAge()}</Text>
        </View>
      </View>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 11,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  petContainer: {
    flexDirection: "row",
    gap: 17,
  },
  petAvatar: {
    flexDirection: "row",
  },
  petInfo: {
    justifyContent: "center",
    textAlign: "center",
    gap: 1,
  },
  petName: {
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Lalezar-Regular",
    color: COLORS.BLACK,
    letterSpacing: 0,
  },
  petAge: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Roboto-Regular",
    letterSpacing: 0.25,
  },
});
