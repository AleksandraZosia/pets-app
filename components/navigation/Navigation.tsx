import React, { useCallback } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link, usePathname, useSegments } from "expo-router";
import RocketIcon from "@/assets/icons/rocket.svg";
import PawIcon from "@/assets/icons/paw.svg";
import FileIcon from "@/assets/icons/file.svg";
import { Colors } from "@/assets/colors/colors";
import paths from "@/consts";

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
      <Link href={`/${paths.home}`} replace asChild>
        <Pressable style={isActive(paths.home) ? styles.activeTab : styles.tab}>
          <RocketIcon />
          <Text style={styles.text}>Start</Text>
        </Pressable>
      </Link>
      <Link href={`/${paths.pets}`} replace asChild>
        <Pressable style={isActive(paths.pets) ? styles.activeTab : styles.tab}>
          <PawIcon />
          <Text style={styles.text}>Zwierzaki</Text>
        </Pressable>
      </Link>
      <Link href={`/${paths.documents}`} replace asChild>
        <Pressable
          style={isActive(paths.documents) ? styles.activeTab : styles.tab}
        >
          <FileIcon />
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
    backgroundColor: Colors.yellowMain,
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
    backgroundColor: Colors.yellowSecondary,
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
    color: Colors.white,
    fontFamily: "Lalezar-Regular",
  },
});
