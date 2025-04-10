class TrackedWeight extends Realm.Object<TrackedWeight> {
  name!: "string";
  weight!: number;
  added!: Date;

  static schema: Realm.ObjectSchema = {
    name: "TrackedWeight",
    embedded: true,
    properties: {
      weight: "float",
      added: "date",
    },
  };
}
