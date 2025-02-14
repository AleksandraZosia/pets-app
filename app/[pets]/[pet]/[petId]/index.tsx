import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function Pet() {
  const { id } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is pet screen with id: {id}</Text>
    </View>
  );
}
