import { Text, View } from "react-native";
import { useState } from "react";
import {
  DefaultPage,
  Button,
  AddDocumentModal,
  CalendarWithAgenda,
} from "@/components";
import { COLORS } from "@/consts";
import { router } from "expo-router";
import { ImagePickerAsset, launchCameraAsync } from "expo-image-picker";
export default function Index() {
  const [addDocumentModalVisible, setAddDocumentModalVisible] = useState(false);
  const [newImage, setNewImage] = useState<ImagePickerAsset | null>(null);

  return (
    <DefaultPage>
      <AddDocumentModal
        visible={addDocumentModalVisible}
        onClose={() => setAddDocumentModalVisible(false)}
        onAddFile={() => router.push("/new-document")}
        onOpenCamera={async () => {
          const result = await launchCameraAsync({
            mediaTypes: ["images"],
            aspect: [1, 1],
          });

          if (result.canceled) return;
          setNewImage(result.assets?.[0] ?? null);

          router.push({
            pathname: "/new-document",
            params: {
              imageUri: result.assets?.[0].uri,
              type: result.assets?.[0].mimeType,
              name: result.assets?.[0].fileName,
              size: result.assets?.[0].fileSize,
              assetId: result.assets?.[0].assetId,
            },
          });
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          minHeight: 150,
        }}
      >
        <CalendarWithAgenda />
      </View>
      <View style={{ padding: 16, gap: 16 }}>
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
