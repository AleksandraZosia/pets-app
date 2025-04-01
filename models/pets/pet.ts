import Realm, { BSON } from "realm";

class Pet extends Realm.Object<Pet> {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  species!: string; // SpeciesTypes
  speciesName?: string;
  imageUri!: string;
  gender!: string; // GenderTypes
  breed?: string;
  color?: string;
  weight?: number;
  documentsIds?: string[];
  eventsIds?: string[];
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
      weight: "float?",
      documentsIds: "string[]?",
      eventsIds: "string[]?",
      birthDate: "date",
    },
    primaryKey: "_id",
  };
}

export default Pet;
