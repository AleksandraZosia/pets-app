import { useCallback, useState } from "react";
import {
  DateTimePickerEvent,
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

export const useAndroidDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setDate(currentDate || new Date());
  };

  const showMode = useCallback(
    (currentMode: "date" | "time") => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    },
    [date, onChange]
  );

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const datePicker = () => {
    return null;
  };
  return { date, showDatepicker, showTimepicker, datePicker };
};
