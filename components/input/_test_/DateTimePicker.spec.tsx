import { DateTimePicker } from "../DateTimePicker";

describe("DateTimePicker", () => {
  it("should render", () => {
    const dateTimePicker = (
      <DateTimePicker
        label="Test"
        value="2021-01-01"
        placeholder="Test"
        onChangeText={() => {}}
        readOnly={true}
        onPress={() => {}}
      />
    );
    expect(dateTimePicker).toBeDefined();
    expect(dateTimePicker.props.label).toBe("Test");
    expect(dateTimePicker.props.value).toBe("2021-01-01");
    expect(dateTimePicker.props.onChangeText).toBeDefined();
    expect(dateTimePicker.props.readOnly).toBe(true);
    expect(dateTimePicker.props.onPress).toBeDefined();
  });
});
