import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { useCallback, useState } from "react";

export const useIOSDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<"date" | "time" | "datetime" | "countdown">(
    "date"
  );
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate || new Date());
  };

  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const datePicker = useCallback(() => {
    return show ? (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        onChange={onChange}
        mode={mode}
      />
    ) : null;
  }, [show, date, mode]);

  return { date, showDatepicker, showTimepicker, datePicker };
};
