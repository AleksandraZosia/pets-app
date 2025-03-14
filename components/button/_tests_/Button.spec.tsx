import { Button } from "../Button";

describe("Button", () => {
  it("should render", () => {
    const button = <Button title="Test" onPress={() => {}} type="primary" />;
    expect(button).toBeDefined();
    expect(button.props.title).toBe("Test");
    expect(button.props.type).toBe("primary");
    expect(button.props.onPress).toBeDefined();
  });
});
