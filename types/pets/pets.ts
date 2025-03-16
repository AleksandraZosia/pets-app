import { SvgProps } from "react-native-svg";

export type Pet = {
  id: string;
  name: string;
  species: SpeciesTypes;
  imageUri: string;
  gender: GenderTypes;
  breed?: string;
  color?: string;
  weight?: number;
  documentsIds: string[] | null;
  eventsIds: string[] | null;
  birthDate: Date;
};

export type Pets = Pet[];

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
  | "horse";

export type GenderTypes = "male" | "female";

export type Species = {
  id: number;
  name: SpeciesTypes;
  avatar: React.FC<SvgProps>;
};
