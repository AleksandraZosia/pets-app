import { Input } from "../Input";

describe("Input", () => {
  it("should render", () => {
    const input = (
      <Input
        label="Test"
        placeholder="Test"
        value="Test"
        onChangeText={() => {}}
        asTextArea={true}
      />
    );
    expect(input).toBeDefined();
    expect(input.props.label).toBe("Test");
    expect(input.props.placeholder).toBe("Test");
    expect(input.props.value).toBe("Test");
    expect(input.props.onChangeText).toBeDefined();
    expect(input.props.asTextArea).toBe(true);
  });
});
