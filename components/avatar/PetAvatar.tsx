import { ImageBackground, View, Image, StyleSheet } from "react-native";

export const PetAvatar = ({
  petPhoto,
  size = 64,
  bgHeight = 78,
  bgWidth = 83,
}: {
  petPhoto: string;
  size?: number;
  bgHeight?: number;
  bgWidth?: number;
}) => {
  return (
    <View style={styles.petAvatar}>
      <ImageBackground
        source={require("../../assets/images/pet-background.png")}
        style={{
          width: bgWidth,
          height: bgHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
      >
        <Image
          source={{ uri: petPhoto }}
          style={{ width: size, height: size }}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  petAvatar: {
    flexDirection: "row",
  },
});
