import { SvgProps } from "react-native-svg";
import { BSON } from "realm";

export type Pet = {
  _id: BSON.ObjectId;
  id: string;
  name: string;
  species: SpeciesTypes;
  speciesName?: string;
  imageUri: string;
  gender: GenderTypes;
  breed?: string;
  color?: string;
  trackedWeight?: TrackedWeight[];
  documents: string[] | null;
  events: string[] | null;
  birthDate: Date;
};

export type Pets = Pet[];

export type TrackedWeight = {
  weight: number;
  added: Date;
};

export type SpeciesTypes =
  | "dog"
  | "cat"
  | "rabbit"
  | "chinchilla"
  | "hamster"
  | "rat"
  | "degu"
  | "guinea_pig"
  | "parrot"
  | "canary"
  | "lizard"
  | "snake"
  | "turtle"
  | "horse"
  | "other";

export type GenderTypes = "male" | "female";

export type Species = {
  id: number;
  name: SpeciesTypes;
  avatar: React.FC<SvgProps>;
};
