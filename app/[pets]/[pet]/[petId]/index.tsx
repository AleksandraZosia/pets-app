import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { DefaultPage, Header } from "@/components";

export default function Pet() {
  const { petId } = useLocalSearchParams();
  return (
    <DefaultPage>
      <Header title={`Zwierzak ${petId}`} canGoBack />
      <Text>This is pet screen with id: {petId}</Text>
    </DefaultPage>
  );
}
