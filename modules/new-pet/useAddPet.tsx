import { species } from "@/consts/species";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";

export const useAddPet = () => {
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState<string>("");
  const [weight, setWeight] = useState<number>();
  const [weightingDate, setWeightingDate] = useState<Date>();
  const [photoUri, setPhotoUri] = useState("");

  const handleAddCurrentWeight = (arg: string) => {
    setWeight(+arg);
    setWeightingDate(new Date());
  };

  return {
    petName,
    setPetName,
    breed,
    setBreed,
    weight,
    handleAddCurrentWeight,
    photoUri,
    setPhotoUri,
  };
};
