import { DefaultPage, Header } from "@/components";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Pets() {
  return (
    <DefaultPage>
      <Header title="Zwierzaki" />
      <Link asChild href="/pets/pet/1">
        <Text>This is link to pet screen on pets screen</Text>
      </Link>
    </DefaultPage>
  );
}
