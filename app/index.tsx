import { Text, View } from "react-native";
import { useState } from "react";
import { DefaultPage, Button, AddDocumentModal } from "@/components";
import { COLORS } from "@/consts";
import { router } from "expo-router";

export default function Index() {
  const [addDocumentModalVisible, setAddDocumentModalVisible] = useState(false);

  return (
    <DefaultPage>
      <AddDocumentModal
        visible={addDocumentModalVisible}
        onClose={() => setAddDocumentModalVisible(false)}
        onAddFile={() => {}}
        onOpenCamera={() => {}}
      />

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
        <Text style={{ color: COLORS.YELLOW_SECONDARY }}>+ Pokaż więcej</Text>
      </View>
      <View
        style={{
          gap: 16,
          backgroundColor: COLORS.WHITE,
          flex: 1,
          padding: 16,
        }}
      >
        <Button
          title="+ Dodaj wydarzenie"
          onPress={() => {
            router.push("/new-event");
          }}
        />
        <Button
          title="+ Dodaj dokument"
          onPress={() => {
            setAddDocumentModalVisible(true);
          }}
        />
      </View>
    </DefaultPage>
  );
}
