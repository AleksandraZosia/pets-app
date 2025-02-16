import { Text } from "react-native";

import { Link } from "expo-router";
import { DefaultPage } from "@/components";

export default function Index() {
  return (
    <DefaultPage>
      <Text>Start screen</Text>
      <Link href="/pets">
        <Text>Go to pets</Text>
      </Link>
    </DefaultPage>
  );
}
