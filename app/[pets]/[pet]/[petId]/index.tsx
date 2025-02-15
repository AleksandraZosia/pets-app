import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/header/Header";
import DefaultPage from "@/components/page/DefaultPage";

export default function Pet() {
  const { petId } = useLocalSearchParams();
  return (
    <DefaultPage>
      <Header title={`Zwierzak ${petId}`} canGoBack />
      <Text>This is pet screen with id: {petId}</Text>
    </DefaultPage>
  );
}
