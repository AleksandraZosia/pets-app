import { DefaultPage, Header, PetItem, Button } from "@/components";
import { pets } from "@/consts/mocks/pets";
import { Pet } from "@/types";
import { router } from "expo-router";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DogIcon from "@/assets/icons/dog.svg";
import { calculateAge } from "@/helpers/dateFunctions";

const renderItem = ({ item }: { item: Pet }) => (
  <PetItem
    key={item.id}
    onPress={() => router.push(`/pets/pet/${item.id}?petName=${item.name}`)}
    petPhoto={item.imageUri}
    petName={item.name}
    petAge={calculateAge(item.birthDate)}
    Icon={DogIcon}
  />
);

export default function Pets() {
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
