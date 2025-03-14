import { HeaderRight } from "../HeaderRight";

describe("HeaderRight", () => {
  it("should render", () => {
    const headerRight = (
      <HeaderRight headerRightTitle="Test" handleHeaderRightPress={() => {}} />
    );
    expect(headerRight).toBeDefined();
    expect(headerRight.props.headerRightTitle).toBe("Test");
    expect(headerRight.props.handleHeaderRightPress).toBeDefined();
  });
});
