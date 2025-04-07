import Realm from "realm";
import Event from "./event";

class CalendarGroup extends Realm.Object<CalendarGroup> {
  title!: string; // DateString as a key
  data!: Realm.List<Event>;

  static schema: Realm.ObjectSchema = {
    name: "CalendarGroup",
    primaryKey: "title",
    properties: {
      title: "string",
      data: {
        type: "list",
        objectType: "Event",
      },
    },
  };
}

export default CalendarGroup;
