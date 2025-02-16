import { View, StyleSheet } from "react-native";
import { Navigation } from "../navigation";

export const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {children}
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "column",
  },
});
