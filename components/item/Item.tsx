import React from "react";
import { COLORS } from "@/consts";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export interface IItemProps {
  date?: string;
  time?: string;
  type?: string;
  title?: string;
  description?: string;
}

export const Item = ({ date, time, type, title, description }: IItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.decorative} />
      <ScrollView contentContainerStyle={styles.item} horizontal={true}>
        <View style={styles.row}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.date}>{time}</Text>
          {type && <View style={styles.dot} />}
          <Text style={styles.type}>{type}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    borderColor: COLORS.YELLOW_MAIN,
  },
  decorative: {
    width: 8,
    borderRadius: 4,
    backgroundColor: COLORS.YELLOW_MAIN,
    borderColor: COLORS.YELLOW_MAIN,
    borderWidth: 1,
  },
  item: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 4,
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    overflow: "hidden",
    textOverflow: "ellipsis",
    flexGrow: 0,
    width: "100%",
  },
  type: {
    color: COLORS.BLACK_SECONDARY,
    fontFamily: "Lalezar-Regular",
    fontSize: 20,
    fontWeight: "400",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  date: {
    fontFamily: "Lalezar-Regular",
    fontSize: 20,
    fontWeight: "400",
    color: COLORS.BLACK,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.BLACK,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.BLACK_SECONDARY,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 9,
    backgroundColor: COLORS.YELLOW_MAIN,
  },
});
