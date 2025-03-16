import { DateData } from "react-native-calendars";
import { MONTHS } from "@/consts/dates";
export const getDateData = (date: string): DateData => {
  return {
    dateString: date,
    day: parseInt(date.split("-")[2]),
    month: parseInt(date.split("-")[1]),
    year: parseInt(date.split("-")[0]),
    timestamp: new Date(date).getTime(),
  };
};

export const getMonthName = (month?: number) => {
  if (!month) return "";
  return MONTHS[month - 1];
};

export const calculateAge = (birthDate: Date) => {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age;
};
