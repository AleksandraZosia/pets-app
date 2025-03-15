import { Documents } from "@/types";

export const documents: Documents = [
  {
    id: "1",
    name: "Wyniki badania",
    type: "pdf",
    petId: "1",
    petName: "Kromka",
    description: "Wyniki badania krwi",
    eventIds: ["5"],
    fileUri: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Wyniki badania",
    type: "pdf",
    petId: "2",
    petName: "Chleb",
    description: "Wyniki badania moczu",
    eventIds: ["2"],
    fileUri: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Wyniki badania",
    type: "jpg",
    petId: "3",
    petName: "Chałka",
    description: "Wyniki usg",
    eventIds: ["3"],
    fileUri: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Wyniki badania",
    type: "jpg",
    petId: "4",
    petName: "Filemon",
    eventIds: null,
    description: "Wyniki badania moczu",
    fileUri: "https://via.placeholder.com/150",
  },
];
