import { Header, PageWithoutNavigation, SpeciesItem } from "@/components";
import { species } from "@/consts/species";
import { Text, StyleSheet, View, ScrollView } from "react-native";
export default function NewPet() {
  return (
    <PageWithoutNavigation>
      <Header title="Nowy zwierzak" canGoBack HeaderRightTitle="Next" />
      <ScrollView>
        <Text style={styles.title}>Wybierz gatunek</Text>
        <View style={styles.speciesContainer}>
          {species.map((species) => (
            <SpeciesItem
              key={species.id}
              name={species.name}
              Icon={species.avatar}
              onPress={() => {}}
              isSelected={false}
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
