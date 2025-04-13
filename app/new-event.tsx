import { ScrollView, View } from "react-native";
import { useMemo, useState } from "react";
import {
  PageWithoutNavigation,
  Header,
  Input,
  InputWithIcon,
  DateTimePicker,
  Button,
  DropdownWithLabel,
} from "@/components";
import { useDatePicker } from "@/modules";
import { getDocumentAsync, DocumentPickerAsset } from "expo-document-picker";
import { EventType } from "@/types";
import { EVENTS } from "@/consts";
import { mapEventTypes } from "@/mappers/mapEventTypes";

const mappedEvents = {};

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [animal, setAnimal] = useState<{ name: string; id: string } | null>(
    null
  );
  const [eventType, setEventType] = useState<{
    id: EventType;
    name: string;
  } | null>(null);
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
        <DropdownWithLabel
          label="Typ wydarzenia"
          onSelect={(eventType) => setEventType(eventType)}
          selectedName={eventType?.name ?? ""}
          data={EVENTS}
          placeholder="Wybierz typ wydarzenia"
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
