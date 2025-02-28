import { Text, View } from "react-native";

import { DefaultPage, Button, InputWithIcon } from "@/components";
import { COLORS } from "@/consts";
import { useDatePicker } from "@/modules/date-picker/useDatePicker";

export default function Index() {
  const { date, showDatepicker, showTimepicker, datePicker } = useDatePicker();
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
        <View style={{ flexDirection: "row", gap: 16 }}>
          <InputWithIcon
            label="Data"
            placeholder="20.02.2025"
            onPress={showDatepicker}
            value={date.toLocaleDateString()}
            readOnly={true}
          />
          <InputWithIcon
            label="Godzina"
            placeholder="12:00"
            onPress={showTimepicker}
            value={date.toLocaleTimeString()}
            readOnly={true}
          />
        </View>

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
