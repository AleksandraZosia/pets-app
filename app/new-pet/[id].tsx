import {
  AddFileModal,
  Button,
  DateTimePicker,
  Header,
  Input,
  PageWithoutNavigation,
} from "@/components";
import { COLORS } from "@/consts";
import { useImagePicker } from "@/hooks/useImagePicker";
import { mapSpecies } from "@/mappers/mapSpecies";
import Pet from "@/models/pets/pet";
import { useDatePicker } from "@/modules";
import { useAddPet } from "@/modules/new-pet/useAddPet";
import { useGetSpeciesInfo } from "@/modules/new-pet/useGetSpeciesInfo";
import { useRealm } from "@realm/react";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

export default function NewPetDetails() {
  const realm = useRealm();
  const [modalVisible, setModalVisible] = useState(false);
  const [forPhotos, setForPhotos] = useState(false);
  const { speciesId, speciesName, Icon, needsBreed } = useGetSpeciesInfo();
  const {
    petName,
    setPetName,
    weight,
    handleAddCurrentWeight,
    breed,
    setBreed,
    setPhotoUri,
    photoUri,
  } = useAddPet();
  const { date: birthDate, showDatepicker, datePicker } = useDatePicker();

  const { takePhoto, pickFile, addToStorage } = useImagePicker();

  const handleAddPhoto = () => {
    setForPhotos(true);
    setModalVisible(true);
  };

  const handleAddDocument = () => {
    setForPhotos(false);
    setModalVisible(true);
  };

  const savePet = () => {
    realm.write(() => {
      const trackedWeightList = realm.create("TrackedWeight", {
        name: "Initial weight",
        weight: weight || 0,
        added: new Date(),
      });

      return new Pet(realm, {
        name: petName,
        species: speciesId.toString(),
        speciesName: speciesName,
        imageUri: photoUri || "",
        gender: "unknown", // Default value since it's required but not in the form
        breed: breed,
        birthDate: birthDate,
        trackedWeight: weight ? [trackedWeightList] : [],
      });
    });
  };

  return (
    <PageWithoutNavigation>
      <Header
        title={`Nowy zwierzak-${mapSpecies(speciesName)}`}
        canGoBack
        HeaderRightTitle="Zapisz"
      />
      <ScrollView contentContainerStyle={styles.form}>
        {datePicker() && datePicker()}
        <AddFileModal
          forPhotos={forPhotos}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onAddFile={pickFile}
          onOpenCamera={async () => {
            const photo = await takePhoto(true);
            if (!photo) {
              console.log("No Photo!");
            }
            photo && setPhotoUri(photo);
          }}
        />
        <View style={styles.imageContainer}>
          {photoUri ? (
            <Image
              source={{ uri: photoUri }}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
              }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.iconContainer}>
              <Icon fill={COLORS.BLACK_SECONDARY} />
            </View>
          )}
          <Pressable onPress={handleAddPhoto}>
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
        <Button onPress={handleAddDocument} title="+ Dodaj dokument" />
      </ScrollView>
    </PageWithoutNavigation>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 140,
    height: 140,
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
