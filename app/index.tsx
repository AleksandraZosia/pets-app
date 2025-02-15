import { Text, View } from "react-native";
import { Colors } from "../assets/colors/colors";
import { Link } from "expo-router";
import Navigation from "@/components/navigation/Navigation";
import DefaultPage from "@/components/page/DefaultPage";

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
