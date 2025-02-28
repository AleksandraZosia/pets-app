import React, { useCallback } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, usePathname, useSegments } from "expo-router";
import RocketIcon from "@/assets/icons/rocket.svg";
import PawIcon from "@/assets/icons/paw.svg";
import FileIcon from "@/assets/icons/file.svg";
import { COLORS, PATHS } from "@/consts";

export const Navigation = () => {
  const pathname = usePathname();
  const segments = useSegments();
  const isActive = useCallback(
    (path: string) =>
      pathname === `/${path}` ||
      segments.find((segment) => segment === `[${path}]`),
    [pathname, segments]
  );
  return (
    <View style={styles.container}>
      <Link href={`/${PATHS.HOME}`} replace asChild>
        <Pressable style={isActive(PATHS.HOME) ? styles.activeTab : styles.tab}>
          <RocketIcon />
          <Text style={styles.text}>Start</Text>
        </Pressable>
      </Link>
      <Link href={`/${PATHS.PETS}`} replace asChild>
        <Pressable style={isActive(PATHS.PETS) ? styles.activeTab : styles.tab}>
          <PawIcon />
          <Text style={styles.text}>Zwierzaki</Text>
        </Pressable>
      </Link>
      <Link href={`/${PATHS.DOCUMENTS}`} replace asChild>
        <Pressable
          style={isActive(PATHS.DOCUMENTS) ? styles.activeTab : styles.tab}
        >
          <FileIcon fill={COLORS.WHITE} width={22} height={29} />
          <Text style={styles.text}>Dokumenty</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    backgroundColor: COLORS.YELLOW_MAIN,
    paddingVertical: 9.5,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    gap: 4,
  },
  activeTab: {
    backgroundColor: COLORS.YELLOW_SECONDARY,
    paddingVertical: 9.5,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.WHITE,
    fontFamily: "Lalezar-Regular",
  },
});
