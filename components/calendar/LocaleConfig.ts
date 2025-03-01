import { LocaleConfig } from "react-native-calendars";
import { MONTHS } from "@/consts/dates";

LocaleConfig.locales["pl"] = {
  monthNames: MONTHS,
  monthNamesShort: MONTHS,
  dayNames: [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ],
  dayNamesShort: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
  today: "Dzisiaj",
};
export default LocaleConfig.defaultLocale = "pl";
