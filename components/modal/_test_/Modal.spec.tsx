import { Text } from "react-native";
import { CustomModal } from "../Modal";

describe("Modal", () => {
  it("should render", () => {
    const modal = (
      <CustomModal
        visible={true}
        onClose={() => {}}
        children={<Text>Test</Text>}
      />
    );
    expect(modal).toBeDefined();
    expect(modal.props.visible).toBe(true);
    expect(modal.props.onClose).toBeDefined();
    expect(modal.props.children).toMatchObject(<Text>Test</Text>);
  });
});
