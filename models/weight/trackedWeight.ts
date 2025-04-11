import Realm from "realm";

class TrackedWeight extends Realm.Object<TrackedWeight> {
  weight!: number;
  added!: Date;

  static schema: Realm.ObjectSchema = {
    name: "TrackedWeight",
    primaryKey: "added",

    properties: {
      weight: "float",
      added: "date",
    },
  };
}

export default TrackedWeight;
