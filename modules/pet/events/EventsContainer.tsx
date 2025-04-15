import { Item, IItemProps } from "@/components";
import { COLORS } from "@/consts";

import { View, Text, StyleSheet } from "react-native";

interface IEventContainer {
  firstEventData: IItemProps;
  secondEventData: IItemProps;
  title: string;
  firstSubTitle: string;
  secondSubTitle: string;
}

export const EventsContainer = ({
  firstEventData,
  secondEventData,
  title,
  firstSubTitle,
  secondSubTitle,
}: IEventContainer) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>
        <Text style={styles.text}>{firstSubTitle}</Text>
        <Item {...firstEventData} />
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.text}>{secondSubTitle}</Text>
        <Item {...secondEventData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.YELLOW_BACKGROUND,
  },
  title: {
    fontFamily: "Lalezar-Regular",
    fontSize: 20,
  },
  itemsContainer: {
    gap: 8,
    paddingTop: 8,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
});
