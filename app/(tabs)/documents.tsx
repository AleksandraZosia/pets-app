import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button, DefaultPage, Header, Item } from "@/components";
import { router } from "expo-router";
import { COLORS } from "@/consts";
import { useState } from "react";

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

export default function Documents() {
  const [isSortingVisible, setIsSortingVisible] = useState(false);

  return (
    <DefaultPage>
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
            <TouchableOpacity onPress={() => setIsSortingVisible(true)}>
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
