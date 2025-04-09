import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Header, PageWithoutNavigation, SpeciesItem } from "@/components";
import { species } from "@/consts/species";
import { capitalize } from "@/helpers/stringFunctions";
import { mapSpecies } from "@/mappers/mapSpecies";
import { useState } from "react";
import { router } from "expo-router";

export default function NewPet() {
  const [selectedSpecies, setSelectedSpecies] = useState<number | null>(null);
  return (
    <PageWithoutNavigation>
      <Header
        title="Nowy zwierzak"
        canGoBack
        HeaderRightTitle="Next"
        handleHeaderRightPress={() =>
          router.navigate({
            pathname: "/new-pet/[id]",
            params: { id: selectedSpecies ?? "" },
          })
        }
      />
      <ScrollView>
        <Text style={styles.title}>Wybierz gatunek</Text>
        <View style={styles.speciesContainer}>
          {species.map((species) => (
            <SpeciesItem
              key={species.id}
              name={capitalize(mapSpecies(species.name))}
              Icon={species.avatar}
              onPress={() => setSelectedSpecies(species.id)}
              isSelected={selectedSpecies === species.id}
            />
          ))}
        </View>
      </ScrollView>
    </PageWithoutNavigation>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginHorizontal: 16,
    marginTop: 28,
    fontFamily: "Lalezar-Regular",
  },
  speciesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 40,
    marginHorizontal: 16,
  },
});
