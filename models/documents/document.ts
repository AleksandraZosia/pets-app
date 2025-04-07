import Realm, { BSON } from "realm";

class Document extends Realm.Object<Document> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  description?: string;
  petId!: string;
  eventIds!: string[];
  petName!: string;
  type!: string;
  fileUri!: string;
  createdAt: Date = new Date();

  static schema: Realm.ObjectSchema = {
    name: "Document",
    primaryKey: "id",
    properties: {
      _id: "objectId",
      name: "string",
      description: "string?",
      petId: "objectId",
      eventIds: "objectId[]",
      petName: "string",
      type: "string", // This will store the DocumentType
      fileUri: "string",
      createdAt: {
        type: "date",
        default: () => new Date(),
      },
    },
  };
}

export default Document;
