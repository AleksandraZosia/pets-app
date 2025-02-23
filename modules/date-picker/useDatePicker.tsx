import { Platform } from "react-native";
import { useIOSDatePicker } from "./useIOSDatePicker";
import { useAndroidDatePicker } from "./useAndroidDatePicker";

export const useDatePicker = () => {
  const isIOS = Platform.OS === "ios";
  return isIOS ? useIOSDatePicker() : useAndroidDatePicker();
};
