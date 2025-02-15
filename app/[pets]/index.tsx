import { Link } from "expo-router";
import { View, Text } from "react-native";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import DefaultPage from "@/components/page/DefaultPage";

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
