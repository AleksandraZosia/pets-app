import "react-native-get-random-values";
import Realm, { BSON } from "realm";

class Event extends Realm.Object<Event> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  description?: string;
  date!: Date;
  petId!: string;
  petName!: string;
  type!: string; // EventType
  customEventType?: string;
  status!: string; // EventStatus
  documentsIds?: string[];
  location?: string;
  dateString!: string; // DateString
  timeString?: string;

  static schema: Realm.ObjectSchema = {
    name: "Event",
    properties: {
      _id: "objectId",
      name: "string",
      description: "string?",
      date: "date",
      petId: "string",
      petName: "string",
      type: "string", // Will contain EventType values
      customEventType: "string?",
      status: "string", // Will contain EventStatus values
      documentsIds: "string?[]",
      location: "string?",
      dateString: "string",
      timeString: "string?",
      calendarGroup: {
        type: "linkingObjects",
        objectType: "CalendarGroup",
        property: "data",
      },
    },
    primaryKey: "_id",
  };
}

export default Event;
