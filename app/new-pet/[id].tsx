import {
  Button,
  DateTimePicker,
  Header,
  Input,
  PageWithoutNavigation,
} from "@/components";
import { COLORS } from "@/consts";
import { useImagePicker } from "@/hooks/useImagePicker";
import { mapSpecies } from "@/mappers/mapSpecies";
import { useDatePicker } from "@/modules";
import { useAddPet } from "@/modules/new-pet/useAddPet";
import { useGetSpeciesInfo } from "@/modules/new-pet/useGetSpeciesInfo";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";

export default function NewPetDetails() {
  const { speciesId, speciesName, Icon, needsBreed } = useGetSpeciesInfo();
  const {
    petName,
    setPetName,
    weight,
    handleAddCurrentWeight,
    breed,
    setBreed,
  } = useAddPet();
  const { date: birthDate, showDatepicker, datePicker } = useDatePicker();

  const { takePhoto, pickFile } = useImagePicker();

  return (
    <PageWithoutNavigation>
      <Header
        title={`Nowy zwierzak-${mapSpecies(speciesName)}`}
        canGoBack
        HeaderRightTitle="Zapisz"
      />
      <ScrollView contentContainerStyle={styles.form}>
        {datePicker() && datePicker()}
        <View>
          <View style={styles.iconContainer}>
            <Icon fill={COLORS.BLACK_SECONDARY} />
          </View>
          <Pressable>
            <Text style={styles.text}>Dodaj zdjęcie</Text>
          </Pressable>
        </View>
        <Input
          label="Imię"
          value={petName}
          onChangeText={setPetName}
          placeholder=""
        />
        {needsBreed ? (
          <Input
            label="Rasa"
            value={breed}
            onChangeText={setBreed}
            placeholder=""
          />
        ) : null}
        <DateTimePicker
          label="Data urodzenia"
          onPress={showDatepicker}
          value={birthDate.toLocaleDateString()}
        />
        <Input
          label="Waga"
          value={weight ? `${weight}` : ""}
          onChangeText={handleAddCurrentWeight}
          placeholder=""
        />
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
