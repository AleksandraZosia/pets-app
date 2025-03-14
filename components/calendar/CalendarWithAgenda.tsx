import { StyleSheet, Text, View } from "react-native";

import React, { useCallback, useState, useMemo, memo } from "react";
import {
  CalendarProvider,
  WeekCalendar,
  AgendaList,
  DateData,
} from "react-native-calendars";
import { Item } from "../item";
import { COLORS } from "@/consts";

import { agendaItems } from "./mocks";
import LocaleConfig from "./LocaleConfig";
import { getDateData, getMonthName } from "@/helpers/dateFunctions";
import { capitalize } from "@/helpers/stringFunctions";
import { THEME } from "./theme";

const MemoizedItem = memo(Item);
const MemoizedSeparator = memo(() => <View style={styles.separator} />);

export const CalendarWithAgenda = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  const [selectedDay, setSelectedDay] = useState<DateData | null>(
    getDateData(today)
  );

  const formatedMonth = useMemo(() => {
    return capitalize(getMonthName(selectedDay?.month));
  }, [selectedDay?.month]);

  const renderItem = useCallback(({ item }: any) => {
    return (
      <MemoizedItem
        time={item?.hour}
        title={item?.title}
        description={item?.description}
        type={item?.type}
        date={item?.date}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <MemoizedSeparator />;
  }, []);

  return (
    <CalendarProvider
      date={today}
      onMonthChange={(date) => {
        setSelectedDay(date);
      }}
      style={styles.container}
    >
      <Text
        style={styles.header}
      >{`${formatedMonth} ${selectedDay?.year}`}</Text>
      <WeekCalendar
        testID={"WeekCalendar"}
        firstDay={1}
        localeConfig={LocaleConfig}
        style={{
          backgroundColor: COLORS.YELLOW_BACKGROUND,
          flex: 1,
        }}
        theme={THEME}
        onDayPress={(day) => {
          setSelectedDay(day);
        }}
      />
      <AgendaList
        renderItem={renderItem}
        sections={agendaItems}
        renderSectionHeader={({ section }) => null}
        scrollToNextEvent
        sectionStyle={styles.section}
        style={{
          backgroundColor: COLORS.YELLOW_BACKGROUND,
          gap: 10,
          padding: 10,
        }}
        ItemSeparatorComponent={renderSeparator}
        SectionSeparatorComponent={renderSeparator}
        disableScrollViewPanResponder
        removeClippedSubviews={true}
      />
    </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  section: {
    backgroundColor: COLORS.BLACK,
    gap: 10,
    padding: 10,
  },
  separator: {
    height: 12,
    backgroundColor: COLORS.YELLOW_BACKGROUND,
  },
  header: {
    fontSize: 24,
    color: COLORS.BLACK,
    fontFamily: "Lalezar-Regular",
    paddingLeft: 12,
  },
});
