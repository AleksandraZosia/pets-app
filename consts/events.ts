import { mapEventTypes } from "@/mappers/mapEventTypes";
import { EventType } from "@/types";

export const EVENTS: { id: EventType; name: string }[] = [
  { name: mapEventTypes("vaccination"), id: "vaccination" },
  { name: mapEventTypes("deworming"), id: "deworming" },
  { name: mapEventTypes("vet_visit"), id: "vet_visit" },
  { name: mapEventTypes("other"), id: "other" },
];
