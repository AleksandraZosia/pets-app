import { InputWithIcon } from "../InputWithIcon";

describe("InputWithIcon", () => {
  it("should render", () => {
    const inputWithIcon = (
      <InputWithIcon
        label="Test"
        value="Test"
        onChangeText={() => {}}
        placeholder="Test"
        readOnly={true}
      />
    );
    expect(inputWithIcon).toBeDefined();
    expect(inputWithIcon.props.label).toBe("Test");
    expect(inputWithIcon.props.value).toBe("Test");
    expect(inputWithIcon.props.onChangeText).toBeDefined();
    expect(inputWithIcon.props.placeholder).toBe("Test");
    expect(inputWithIcon.props.readOnly).toBe(true);
  });
});
