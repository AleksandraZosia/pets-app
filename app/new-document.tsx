import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { File, Paths } from "expo-file-system/next";

import {
  Header,
  PageWithoutNavigation,
  Input,
  InputWithIcon,
  DateTimePicker,
  Dropdown,
  DropdownWithLabel,
} from "@/components";

import { useLocalSearchParams } from "expo-router";
import { useDatePicker } from "@/modules/date-picker";
import { useImagePicker } from "@/hooks/useImagePicker";

export default function NewDocument() {
  const [fileName, setFileName] = useState<string | null>(null);
  const { addToStorage } = useImagePicker();
  const [comment, setComment] = useState<string | null>(null);
  const { date, showDatepicker, showTimepicker, datePicker } = useDatePicker();
  const [animal, setAnimal] = useState<{ name: string; id: string } | null>(
    null
  );
  const { name } = useLocalSearchParams<{
    name: string;
  }>();

  useEffect(() => {
    if (name) {
      setFileName(name);
    }
  }, [name]);

  const handleSave = () => {
    const uri = addToStorage(name);
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
        <Input
          label="Nazwa"
          placeholder="Nazwa_pliku_pobrana_automatycznie_edytowalna"
          onChangeText={(newName) => setFileName(newName)}
          value={fileName ?? ""}
        />

        <DropdownWithLabel
          label="Zwierzak"
          onSelect={(arg) => {
            setAnimal(arg);
          }}
          data={[
            { name: "Kromka", id: "1" },
            { name: "Chałka", id: "2" },
            { name: "Chleb", id: "3" },
          ]}
          selectedName={animal?.name ?? ""}
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
