import {
  Link,
  RelativePathString,
  usePathname,
  useSegments,
} from "expo-router";
import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { Colors } from "@/assets/colors/colors";
import { StyleSheet } from "react-native";
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
          <Text>Start</Text>
        </Pressable>
      </Link>
      <Link href={`/${paths.pets}`} replace asChild>
        <Pressable style={isActive(paths.pets) ? styles.activeTab : styles.tab}>
          <Text>Zwierzaki</Text>
        </Pressable>
      </Link>
      <Link href={`/${paths.documents}`} replace asChild>
        <Pressable
          style={isActive(paths.documents) ? styles.activeTab : styles.tab}
        >
          <Text>Dokumenty</Text>
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
    padding: 10,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: Colors.yellowSecondary,
    padding: 10,
    flex: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
