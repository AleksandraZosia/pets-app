import { DefaultPage, Header, PetItem, Button } from "@/components";
import { router } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Pets() {
  return (
    <DefaultPage>
      <Header title="Zwierzaki" />
      <View style={styles.container}>
        <PetItem
          onPress={() => router.push("/pets/pet/1")}
          petPhoto={require("@/assets/images/Kromka.png")}
          petName="Kromka"
          petAge={2}
        />
        <PetItem
          onPress={() => router.push("/pets/pet/2")}
          petPhoto={require("@/assets/images/Kromka.png")}
          petName="Chleb"
          petAge={1}
        />
        <PetItem
          onPress={() => router.push("/pets/pet/3")}
          petPhoto={require("@/assets/images/Kromka.png")}
          petName="Chałka"
          petAge={6}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="+ Dodaj zwierzaka"
          onPress={() => router.push("/new-pet")}
        />
      </View>
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingHorizontal: 8,
    paddingVertical: 25,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    flex: 1,
  },
});
