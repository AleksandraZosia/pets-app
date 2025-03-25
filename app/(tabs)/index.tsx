import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import {
  DefaultPage,
  Button,
  AddDocumentModal,
  CalendarWithAgenda,
} from "@/components";
import { COLORS } from "@/consts";
import { router } from "expo-router";
import { useImagePicker } from "@/hooks/useImagePicker";
export default function Index() {
  const [addDocumentModalVisible, setAddDocumentModalVisible] = useState(false);
  const { takePhoto, pickFile } = useImagePicker();
  const [showFullAgenda, setShowFullAgenda] = useState(false);

  return (
    <DefaultPage>
      <AddDocumentModal
        visible={addDocumentModalVisible}
        onClose={() => setAddDocumentModalVisible(false)}
        onAddFile={pickFile}
        onOpenCamera={takePhoto}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CalendarWithAgenda showAgenda={showFullAgenda} />
      </View>
      <Pressable
        style={{ padding: 16, gap: 16 }}
        onPress={() => setShowFullAgenda((arg) => !arg)}
      >
        <Text style={{ color: COLORS.YELLOW_SECONDARY }}>{`+ Pokaż ${
          showFullAgenda ? "mniej" : "więcej"
        }`}</Text>
      </Pressable>
      {!showFullAgenda && (
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
      )}
    </DefaultPage>
  );
}
