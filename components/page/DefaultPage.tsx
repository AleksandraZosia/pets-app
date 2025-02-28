import { StyleSheet } from "react-native";
import { Navigation } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/consts";

export const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: COLORS.YELLOW_BACKGROUND,
  },
});
