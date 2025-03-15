import { SpeciesTypes } from "@/types/pets/pets";

export const mapSpecies = (species: SpeciesTypes) => {
  switch (species) {
    case "dog":
      return "pies";
    case "cat":
      return "kot";
    case "rabbit":
      return "królik";
    case "chinchilla":
      return "szynszyla";
    case "hamster":
      return "chomik";
    case "rat":
      return "szczur";
    case "degu":
      return "koszatniczka";
    case "guinea_pig":
      return "świnka morska";
    case "parrot":
      return "papuga";
    case "canary":
      return "kanarek";
    case "lizard":
      return "jaszczurka";
    case "snake":
      return "wąż";
    case "turtle":
      return "żółw";
    case "horse":
      return "koń";
  }
};
