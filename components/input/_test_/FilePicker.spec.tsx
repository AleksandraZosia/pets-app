import { FilePicker } from "../FilePicker";

describe("FilePicker", () => {
  it("should render", () => {
    const filePicker = (
      <FilePicker
        label="Test"
        placeholder="Test"
        onPress={() => {}}
        onChangeText={() => {}}
        value="Test"
        readOnly={true}
      />
    );
    expect(filePicker).toBeDefined();
    expect(filePicker.props.label).toBe("Test");
    expect(filePicker.props.placeholder).toBe("Test");
    expect(filePicker.props.onPress).toBeDefined();
    expect(filePicker.props.onChangeText).toBeDefined();
    expect(filePicker.props.value).toBe("Test");
    expect(filePicker.props.readOnly).toBe(true);
  });
});
