export type Event = {
  id: string;
  name: string;
  description: string | null;
  date: Date;
  petId: string;
  petName: string;
  type: EventType;
  customEventType: string | null;
  status: EventStatus;
  documentsIds: string[] | null;
  location: string | null;
  dateString: DateString;
  timeString: string | null;
};

export type DateString = string;
export type DateStringArray = DateString[];

export type Events = Event[];
export type EventsInCalendar = {
  title: DateString;
  data: Event[];
}[];

export type EventStatus = "pending" | "completed" | "cancelled";
export type EventType = "vaccination" | "deworming" | "vet_visit" | "other";
