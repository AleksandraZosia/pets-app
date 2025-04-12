import { DefaultPage, Header, PetItem, Button } from "@/components";
import { Pet as PetType } from "@/types";
import { router } from "expo-router";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DogIcon from "@/assets/icons/dog.svg";
import { calculateAge } from "@/helpers/dateFunctions";
import { useQuery } from "@realm/react";
import Pet from "@/models/pets/pet";
import { species } from "@/consts/species";
import { SvgProps } from "react-native-svg";

const getSpeciesAvatar = (petSpecies: string) =>
  species.find((sp) => sp.name === petSpecies)?.avatar ?? DogIcon;

const renderItem = ({ item }: { item: PetType }) => (
  <PetItem
    key={item.id}
    onPress={() => router.push(`/pets/pet/${item.id}?petName=${item.name}`)}
    petPhoto={item.imageUri}
    petName={item.name}
    petAge={calculateAge(item.birthDate)}
    Icon={getSpeciesAvatar(item.speciesName ?? "")}
  />
);

export default function Pets() {
  const pets = useQuery(Pet).map((pet) => ({
    id: `${pet._id}`,
    name: pet.name,
    imageUri: pet.imageUri,
    birthDate: pet.birthDate,
    speciesName: pet.speciesName,
  }));
  return (
    <DefaultPage>
      <Header title="Zwierzaki" />
      <View style={styles.container}>
        <FlatList
          data={pets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
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
    maxHeight: 460,
  },
  flatList: {
    gap: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    flex: 1,
  },
});
