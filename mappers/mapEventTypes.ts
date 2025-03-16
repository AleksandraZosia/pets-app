import { Event } from "@/types/events/events";

export const mapEventTypes = (event: Event) => {
  switch (event.type) {
    case "vaccination":
      return "szczepienie";
    case "deworming":
      return "odrobaczanie";
    case "vet_visit":
      return "wizyta u weterynarza";
    case "other":
      return event.customEventType;
  }
};
