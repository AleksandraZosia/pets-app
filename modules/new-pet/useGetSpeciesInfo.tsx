import { species } from "@/consts/species";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

export const useGetSpeciesInfo = () => {
  const speciesId = +useLocalSearchParams().id;

  const [selectedSpecies] = useMemo(
    () => species.filter((el) => el.id === speciesId),
    [speciesId]
  );
  const Icon = selectedSpecies.avatar;

  const speciesName = selectedSpecies.name;
  const needsBreed =
    selectedSpecies.name === "dog" || selectedSpecies.name === "cat";

  return {
    Icon,
    needsBreed,
    speciesName,
    speciesId,
  };
};
