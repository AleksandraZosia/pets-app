import { Event, EventType } from "@/types";

export const mapEventTypes = (eventOrType: Event | EventType) => {
  const eventType =
    typeof eventOrType === "string" ? eventOrType : eventOrType.type;

  switch (eventType) {
    case "vaccination":
      return "szczepienie";
    case "deworming":
      return "odrobaczanie";
    case "vet_visit":
      return "wizyta u weterynarza";
    case "other":
      return "inne";
  }
};
