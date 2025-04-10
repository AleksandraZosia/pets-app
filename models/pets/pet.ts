import Realm, { BSON } from "realm";
import Event from "../events/event";
import Document from "../documents/document";

class Pet extends Realm.Object<Pet> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  species!: string; // SpeciesTypes
  speciesName?: string;
  imageUri!: string;
  gender!: string; // GenderTypes
  breed?: string;
  color?: string;
  trackedWeight?: TrackedWeight;
  documents?: Document[];
  events?: Event[];
  birthDate!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Pet",
    properties: {
      _id: "objectId",
      name: "string",
      species: "string", // Will contain SpeciesTypes values
      speciesName: "string?",
      imageUri: "string",
      gender: "string", // Will contain GenderTypes values
      breed: "string?",
      color: "string?",
      trackedWeight: {
        type: "list",
        objectType: "TrackedWeight",
      },
      documents: {
        type: "list",
        objectType: "Document",
      },
      events: {
        type: "list",
        objectType: "Event",
      },
      calendar: {
        type: "list",
        objectType: "CalendarGroup",
      },
      birthDate: "date",
    },
    primaryKey: "_id",
  };
}

export default Pet;
