import { ScrollView, View } from "react-native";
import { useState } from "react";
import {
  PageWithoutNavigation,
  Header,
  Input,
  InputWithIcon,
  DateTimePicker,
  Button,
} from "@/components";
import { useDatePicker } from "@/modules";
import { getDocumentAsync, DocumentPickerAsset } from "expo-document-picker";

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [petName, setPetName] = useState("");
  const [eventType, setEventType] = useState("");
  const [place, setPlace] = useState("");
  const [comment, setComment] = useState("");
  const { date, showDatepicker, showTimepicker, datePicker } = useDatePicker();
  const [file, setFile] = useState<DocumentPickerAsset | null>(null);
  const pickFile = async () => {
    let result = await getDocumentAsync({
      type: ["application/pdf", "image/png", "image/jpeg"],
    });

    if (result.canceled) return;
    setFile(result.assets[0]);
  };
  return (
    <PageWithoutNavigation>
      <Header
        title="Nowe wydarzenie"
        canGoBack={true}
        HeaderRightTitle="Zapisz"
      />
      {/* TODO: Move into a separate component */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          gap: 24,
        }}
      >
        <Input
          label="Nazwa"
          placeholder="USG brzuszka"
          value={eventName}
          onChangeText={setEventName}
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
            picksTime
          />
        </View>
        <InputWithIcon
          label="Zwierzak"
          placeholder="Kromka"
          value={petName}
          onChangeText={setPetName}
        />
        <InputWithIcon
          label="Typ wydarzenia"
          placeholder="wizyta u weterynarza"
          value={eventType}
          onChangeText={setEventType}
        />
        <InputWithIcon
          label="Miejsce (opcjonalnie)"
          placeholder="Gabinet weterynarii DogTorki"
          value={place}
          onChangeText={setPlace}
        />
        <Input
          label="Komentarz (opcjonalnie)"
          placeholder="Kromka była bardzo nieśmiała"
          value={comment}
          onChangeText={setComment}
          asTextArea={true}
        />
        <Button title="+ Załącz dokument" onPress={pickFile} />
      </ScrollView>
    </PageWithoutNavigation>
  );
}
