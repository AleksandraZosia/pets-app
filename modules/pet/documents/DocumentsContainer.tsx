import { Item } from "@/components";
import { COLORS } from "@/consts";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface IDocumentsContainer {
  petId: string;
}

export const DocumentsContainer = ({ title, petId }: IDocumentsContainer) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
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
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {documents.map((el, i) => (
        <Item
          key={i}
          date={el.date}
          time={el.time}
          title={el.title}
          description={el.description}
        />
      ))}
      <TouchableOpacity onPress={() => setIsShowMore(true)}>
        <Text style={styles.showMore}>+ Pokaż więcej</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingInline: 16,
    paddingTop: 16,
    paddingBottom: 32,
    gap: 12,
  },
  title: {
    fontFamily: "Lalezar-Regular",
    fontSize: 20,
  },
  showMore: {
    color: COLORS.YELLOW_SECONDARY,
    fontSize: 14,
  },
});
