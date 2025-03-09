import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { DocumentPickerAsset, getDocumentAsync } from "expo-document-picker";

import {
  Header,
  PageWithoutNavigation,
  Input,
  InputWithIcon,
  DateTimePicker,
} from "@/components";
import { FilePicker } from "@/components/input/FilePicker";
import { useLocalSearchParams } from "expo-router";
import { useDatePicker } from "@/modules/date-picker";

export default function NewDocument() {
  const [file, setFile] = useState<DocumentPickerAsset | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);
  const { date, showDatepicker, showTimepicker, datePicker } = useDatePicker();
  const [animal, setAnimal] = useState<string | null>(null);
  const { imageUri, type, name, size, assetId } = useLocalSearchParams<{
    imageUri: string;
    type: string;
    name: string;
    size: string;
    assetId: string;
  }>();
  const pickFile = async () => {
    let result = await getDocumentAsync({
      type: ["application/pdf", "image/png", "image/jpeg"],
    });

    if (result.canceled) return;
    setFile(result.assets[0]);
    setFileName(result.assets[0].name);
  };

  useEffect(() => {
    if (name) {
      setFileName(name);
    }
  }, [name]);

  const handleSave = () => {
    // TODO: Save the new picture in file system (may need to get it from cache(?))
    // TODO: Save the new document in the database (realm) once it's ready
    console.log("save");
  };

  return (
    <PageWithoutNavigation>
      <Header
        title="Nowy dokument"
        canGoBack={true}
        HeaderRightTitle="Zapisz"
        handleHeaderRightPress={handleSave}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          gap: 24,
        }}
      >
        <FilePicker
          label="Nazwa"
          placeholder="Nazwa_pliku_pobrana_automatycznie_edytowalna"
          onPress={pickFile}
          onChangeText={(newName) => setFileName(newName)}
          value={fileName ?? undefined}
          readOnly={!fileName}
        />
        {/* TODO: Should be a dropdown with list of animals */}
        <InputWithIcon
          label="Zwierzak"
          placeholder="Kromka"
          value={animal ?? ""}
          onChangeText={(newAnimal) => setAnimal(newAnimal)}
        />
        <View style={{ flexDirection: "row", gap: 16 }}>
          {datePicker && datePicker()}
          <DateTimePicker
            label="Data"
            value={date.toLocaleDateString()}
            onPress={showDatepicker}
            readOnly={true}
          />
          <DateTimePicker
            label="Godzina"
            value={date.toLocaleTimeString()}
            onPress={showTimepicker}
            readOnly={true}
          />
        </View>
        <Input
          label="Komentarz"
          placeholder="Wyniki usg brzuszka"
          value={comment ?? ""}
          onChangeText={(newComment) => setComment(newComment)}
          asTextArea={true}
        />
      </ScrollView>
    </PageWithoutNavigation>
  );
}
