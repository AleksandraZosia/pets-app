import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { DefaultPage, Header } from "@/components";

export default function Pet() {
  const { petId, petName } = useLocalSearchParams<{
    petId: string;
    petName: string;
  }>();
  return (
    <DefaultPage>
      <Header title={petName} canGoBack />
      <Text>This is pet screen with id: {petId}</Text>
    </DefaultPage>
  );
}
