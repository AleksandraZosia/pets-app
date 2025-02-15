import { View, Text } from "react-native";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import DefaultPage from "@/components/page/DefaultPage";
export default function Documents() {
  return (
    <DefaultPage>
      <Header title="Dokumenty" />
      <Text>This is documents screen.</Text>
    </DefaultPage>
  );
}
