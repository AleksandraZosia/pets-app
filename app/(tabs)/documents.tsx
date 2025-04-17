import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Button, DefaultPage, Header, Item, RadioButton } from "@/components";
import { router } from "expo-router";
import { COLORS } from "@/consts";
import { useRef, useState } from "react";

const documents = [
  {
    date: "Usg Kromeczki",
    time: "13.04.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
  {
    date: "Usg Kromeczki",
    time: "15.04.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
  {
    date: "Rentgen Kromeczki",
    time: "15.03.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
  {
    date: "Usg Kromeczki",
    time: "13.04.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
  {
    date: "Usg Kromeczki",
    time: "15.04.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
  {
    date: "Rentgen Kromeczki",
    time: "15.03.2025 14:30",
    title: "Usg -dobre",
    description: "pdf, uploaded from files",
  },
];

const SORT_OPTIONS = [
  { id: "newest", label: "Od najnowszych", by: "createdAt", order: "desc" },
  { id: "oldest", label: "Od najstarszych", by: "createdAt", order: "desc" },
  { id: "alphA", label: "Alfabetycznie A-Z", by: "name", order: "desc" },
  { id: "alphZ", label: "Alfabetycznie Z-A", by: "name", order: "asc" },
];

const SortView = () => {
  const [selectedSort, setSelectedSort] = useState<{
    id: string;
    label: string;
    by: string;
    order: string;
  } | null>(null);

  const toggleSelected = (id: string) => {
    selectedSort?.id === id
      ? setSelectedSort(null)
      : setSelectedSort(SORT_OPTIONS.filter((el) => el.id === id)[0]);
  };
  return (
    <View style={sortStyles.container}>
      <Text style={sortStyles.header}>Sortuj według:</Text>
      <View style={sortStyles.optionsContainer}>
        {SORT_OPTIONS.map((el) => (
          <View key={el.id} style={sortStyles.option}>
            <RadioButton
              isChecked={selectedSort?.id === el.id}
              toggleChecked={toggleSelected}
              id={el.id}
            />
            <Text>{el.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const sortStyles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 25,
  },
  header: {
    fontFamily: "Lalezar-Regular",
    fontSize: 20,
  },
  option: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  optionsContainer: {
    gap: 24,
  },
});

export default function Documents() {
  const sortingRef = useRef();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <DefaultPage>
      <BottomSheet ref={sortingRef} height={500} hasDraggableIcon>
        <SortView />
      </BottomSheet>
      <Header title="Dokumenty" />
      <ScrollView>
        <View style={styles.btnWrapper}>
          <Button
            title="+ Dodaj zwierzaka"
            onPress={() => router.navigate("../new-pet")}
          />
        </View>
        <View>
          <View style={styles.docsContainersHeader}>
            <Text style={styles.docsHeader}>Wszystkie dokumenty</Text>
            <TouchableOpacity onPress={() => sortingRef.current?.show?.()}>
              <Text style={styles.sorting}>SORTOWANIE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.docsContainer}>
            {documents.map((el, i) => (
              <Item
                key={i}
                date={el.date}
                time={el.time}
                title={el.title}
                description={el.description}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  docsContainersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "baseline",
  },
  docsHeader: {
    fontFamily: "Lalezar-Regular",
    fontSize: 18,
    letterSpacing: 0,
  },
  sorting: {
    textDecorationLine: "underline",
    color: COLORS.YELLOW_SECONDARY,
    fontSize: 14,
  },
  docsContainer: {
    padding: 16,
    gap: 12,
  },
});
