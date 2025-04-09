import {
  Button,
  Header,
  Input,
  InputWithIcon,
  PageWithoutNavigation,
} from "@/components";
import { COLORS } from "@/consts";
import { species } from "@/consts/species";
import { mapSpecies } from "@/mappers/mapSpecies";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";

export default function NewPetDetails() {
  const { id } = useLocalSearchParams();
  const [selectedSpecies] = species.filter((el) => el.id === +id);
  const Icon = selectedSpecies.avatar;
  return (
    <PageWithoutNavigation>
      <Header
        title={`Nowy zwierzak-${mapSpecies(selectedSpecies.name)}`}
        canGoBack
        HeaderRightTitle="Zapisz"
      />
      <ScrollView contentContainerStyle={styles.form}>
        <View>
          <View style={styles.iconContainer}>
            <Icon fill={COLORS.BLACK_SECONDARY} />
          </View>
          <Pressable>
            <Text style={styles.text}>Dodaj zdjęcie</Text>
          </Pressable>
        </View>
        <Input label="Imię" value="" onChangeText={() => {}} placeholder="" />
        <Input label="Rasa" value="" onChangeText={() => {}} placeholder="" />
        <InputWithIcon label="Data urodzenia" />
        <Input label="Waga" value="" onChangeText={() => {}} placeholder="" />
        <Button onPress={() => {}} title="+ Dodaj dokument" />
      </ScrollView>
    </PageWithoutNavigation>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ECECEC",
  },
  text: { textAlign: "center", padding: 9 },
  form: {
    padding: 14,
    gap: 24,
  },
});
