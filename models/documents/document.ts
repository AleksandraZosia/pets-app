import "react-native-get-random-values";
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
    properties: {
      _id: "objectId",
      name: "string",
      description: "string?",
      petId: { type: "objectId", indexed: true },
      eventIds: { type: "list", objectType: "objectId" },
      petName: "string",
      type: "string", // This will store the DocumentType
      fileUri: "string",
      createdAt: {
        type: "date",
        default: () => new Date(),
      },
    },
    primaryKey: "_id",
  };
}

export default Document;
