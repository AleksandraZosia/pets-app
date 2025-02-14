import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Pets() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link asChild href="/pets/pet/1">
        <Text>This is link to pet screen on pets screen</Text>
      </Link>
    </View>
  );
}
