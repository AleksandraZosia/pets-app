import { Text, View, StyleSheet } from "react-native";
import { Button } from "../button/Button";
import { CustomModal } from "./Modal";
import { COLORS } from "@/consts";

interface AddFileModalProps {
  visible: boolean;
  onClose: () => void;
  onAddFile: () => void;
  onOpenCamera: () => void;
  forPhotos?: boolean;
}

export const AddFileModal = ({
  visible,
  onClose,
  onAddFile,
  onOpenCamera,
  forPhotos = false,
}: AddFileModalProps) => {
  const handleAddFile = () => {
    onAddFile();
    onClose();
  };

  const handleOpenCamera = () => {
    onOpenCamera();
    onClose();
  };

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View>
        <Text style={styles.title}>{`Dodaj ${
          forPhotos ? "zdjęcie" : "dokument"
        }`}</Text>
        <Text style={styles.subtitle}>{`Wybierz źródło ${
          forPhotos ? "zdjęcia" : "dokumentu"
        }`}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title={`+ Zrób zdjęcie ${!forPhotos ? "dokumentu" : ""}`}
            onPress={handleOpenCamera}
          />
          <Button title="+ Dodaj plik z dysku" onPress={handleAddFile} />

          <Button title="Anuluj" type="secondary" onPress={onClose} />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 16,
    paddingTop: 24,
    paddingBottom: 7,
  },
  title: {
    fontSize: 24,
    fontFamily: "Lalezar-Regular",
    color: COLORS.BLACK,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: COLORS.BLACK,
  },
});
