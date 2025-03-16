import { Pets } from "@/types";

export const pets: Pets = [
  {
    id: "1",
    name: "Kromka",
    species: "dog",
    imageUri: require("@/assets/images/Kromka.png"),
    gender: "female",
    birthDate: new Date("2023-12-24"),
    documentsIds: ["1"],
    eventsIds: ["5"],
  },
  {
    id: "2",
    name: "Chleb",
    species: "dog",
    imageUri: require("@/assets/images/Kromka.png"),
    gender: "male",
    birthDate: new Date("2020-01-01"),
    documentsIds: ["2"],
    eventsIds: [],
  },
  {
    id: "3",
    name: "Chałka",
    species: "dog",
    imageUri: require("@/assets/images/Kromka.png"),
    gender: "female",
    birthDate: new Date("2025-01-01"),
    documentsIds: ["3"],
    eventsIds: [],
  },
  {
    id: "4",
    name: "Filemon",
    species: "cat",
    imageUri: require("@/assets/images/Kromka.png"),
    gender: "male",
    birthDate: new Date("2010-01-01"),
    documentsIds: ["4"],
    eventsIds: [],
  },
];
