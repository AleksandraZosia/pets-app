import { Text, View } from "react-native";

import { Link } from "expo-router";
import { DefaultPage, Button } from "@/components";
import { Colors } from "@/assets/colors/colors";

export default function Index() {
  return (
    <DefaultPage>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>space for native calendar</Text>
      </View>
      <View style={{ padding: 16, gap: 16 }}>
        <View
          style={{
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Event 1</Text>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Event 2</Text>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Event 3</Text>
        </View>
        <Text style={{ color: Colors.yellowSecondary }}>+ Pokaż więcej</Text>
      </View>
      <View
        style={{
          gap: 16,
          backgroundColor: Colors.white,
          flex: 1,
          padding: 16,
        }}
      >
        <Button
          title="+ Dodaj wydarzenie"
          onPress={() => {
            console.log("pet");
          }}
        />
        <Button
          title="+ Dodaj dokument"
          onPress={() => {
            console.log("pet");
          }}
        />
      </View>
    </DefaultPage>
  );
}
