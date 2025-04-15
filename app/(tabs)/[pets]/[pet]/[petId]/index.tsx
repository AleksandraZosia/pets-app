import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Button, DefaultPage, Header } from "@/components";
import { PetAvatar } from "@/components/avatar/PetAvatar";
import DogIcon from "@/assets/icons/dog.svg";
import { COLORS } from "@/consts";
import { PetInfo } from "@/modules/pet/PetInfo";
import React from "react";
import { VetVisitsContainer } from "@/modules/pet/events/VetVisitContainer";
import { ParasiteControlContainer } from "@/modules/pet/events/ParasiteControlContainer";
import { OtherEvents } from "@/modules/pet/events/OtherEvents";
import { DocumentsContainer } from "@/modules/pet/documents/DocumentsContainer";

const firstEventDataOt = {
  date: "20.04.2025",
  time: "14:30",
  title: "Wyprawa na Wałpusz",
  description: "Mogą być skutki uboczne",
};
const secondEventDataOt = {
  date: "2.04.2025",
  time: "14:30",
  title: "Spacerek z Magdusią ",
  description: "Jeśli spoko, powtórz za dwa miesiące",
};

const firstEventDataP = {
  date: "20.04.2025",
  time: "14:30",
  type: "Szczepienie",
  title: "Szczepienie na choroby zakaźne",
  description: "Mogą być skutki uboczne",
};
const secondEventDataP = {
  date: "2.04.2025",
  time: "14:30",
  type: "Odrobaczanie",
  title: "Odrobaczanie InParem ",
  description: "Jeśli spoko, powtórz za dwa miesiące",
};

const firstEventDataV = {
  date: "20.04.2025",
  time: "14:30",
  type: "Szczepienie",
  title: "Szczepienie na choroby zakaźne",
  description: "Mogą być skutki uboczne",
};
const secondEventDataV = {
  date: "2.04.2025",
  time: "14:30",
  type: "Szczepienie",
  title: "Szczepienie na wściekliznę",
  description: "Mogą być skutki uboczne",
};

export default function Pet() {
  const { petId, petName } = useLocalSearchParams<{
    petId: string;
    petName: string;
  }>();
  return (
    <DefaultPage>
      <Header title={petName} canGoBack />
      <ScrollView>
        <PetInfo
          petName={petName}
          Icon={DogIcon}
          petPhoto=""
          onAddDocument={() => {}}
          onAddEvent={() => {}}
        />
        <View style={styles.eventsContainer}>
          <VetVisitsContainer
            firstEventData={firstEventDataV}
            secondEventData={secondEventDataV}
          />
          <ParasiteControlContainer
            firstEventData={firstEventDataP}
            secondEventData={secondEventDataP}
          />
          <OtherEvents
            firstEventData={firstEventDataOt}
            secondEventData={secondEventDataOt}
          />
          <Button
            title="Zobacz pełen kalendarz"
            type="secondary"
            onPress={() => {}}
          />
        </View>
        <DocumentsContainer title="Dokumenty (99)" petId={petId} />
      </ScrollView>
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  eventsContainer: {
    gap: 16,
    backgroundColor: COLORS.WHITE,
    paddingBottom: 16,
  },
});
