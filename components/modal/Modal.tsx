import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "@/consts";

interface ModalProps {
  visible?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <>
      {visible && <View style={styles.overlay} />}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onClose();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: COLORS.BLACK,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  modalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
