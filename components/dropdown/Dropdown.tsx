import {
  AVERAGE_ANDROID_BOTTOM_BAR_HEIGHT,
  COLORS,
  DROPDOWN_LIST_HEIGHT_MAX,
} from "@/consts";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Dimensions,
  findNodeHandle,
  NativeMethods,
} from "react-native";
import DropdownIcon from "../../assets/icons/dropdown.svg";

interface DropdownItem {
  name: string;
  [key: string]: any;
}

export interface IDropdown<T extends DropdownItem> {
  onSelect: (arg: T) => void;
  selectedName: string;
  placeholder?: string;
  data: T[];
}

const DROPDOWN_LIST_MARGIN = 5;

export const Dropdown = <T extends DropdownItem>({
  onSelect,
  data,
  selectedName,
  placeholder = "Wybierz zwierzaka",
}: IDropdown<T>) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [dropdownPosition, setDropdownPosition] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const { height: viewportHeight } = Dimensions.get("screen");
  const dropdownRef = React.useRef<View & NativeMethods>(null);

  const toggleDropdown = () => setDropdownVisible((cur) => !cur);

  const handleSelect = (item: T) => {
    onSelect(item);
    toggleDropdown();
  };

  useEffect(() => {
    const node = findNodeHandle(dropdownRef.current);
    if (node) {
      dropdownRef.current?.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number
        ) => {
          setDropdownPosition(pageY);
          setDropdownHeight(height);
          setDropdownWidth(width);
        }
      );
    }
  });

  const dropdownTop = useMemo(() => {
    const distFromBottom = viewportHeight - dropdownPosition - dropdownHeight;

    if (
      distFromBottom <=
      DROPDOWN_LIST_HEIGHT_MAX +
        dropdownHeight +
        AVERAGE_ANDROID_BOTTOM_BAR_HEIGHT
    ) {
      return (
        viewportHeight -
        distFromBottom -
        DROPDOWN_LIST_HEIGHT_MAX -
        dropdownHeight -
        DROPDOWN_LIST_MARGIN
      );
    }
    return viewportHeight - distFromBottom;
  }, [dropdownHeight, dropdownPosition, viewportHeight]);

  return (
    // Maybe just change it to smooth animation and in dom element?
    <View style={styles.container}>
      <TouchableOpacity
        ref={dropdownRef}
        style={styles.dropdownOpener}
        id="dropdown"
        onPress={toggleDropdown}
      >
        <Text>{selectedName || placeholder}</Text>
        <DropdownIcon width={20} height={20} />
      </TouchableOpacity>

      <Modal
        visible={isDropdownVisible}
        transparent
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setDropdownVisible(false)}
        >
          <View
            style={[
              styles.dropdown,
              { top: dropdownTop, width: dropdownWidth },
            ]}
          >
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "column", gap: 8 },
  dropdownOpener: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_SOFT,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 12,
    paddingVertical: 16,
    fontSize: 15,
    fontWeight: "400",
    color: COLORS.BLACK,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  dropdown: {
    marginTop: DROPDOWN_LIST_MARGIN,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    maxHeight: DROPDOWN_LIST_HEIGHT_MAX,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
  },
});
