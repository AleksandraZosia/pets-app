import { Text, View } from "react-native";
import { Dropdown, IDropdown } from "./Dropdown";

interface IDropdownWithLabel<T> extends IDropdown<T> {
  label: string;
}

export const DropdownWithLabel = <T,>({
  label,
  ...props
}: IDropdownWithLabel<T>) => {
  return (
    <View style={{ gap: 8 }}>
      <Text>{label}</Text>
      <Dropdown {...props} />
    </View>
  );
};
