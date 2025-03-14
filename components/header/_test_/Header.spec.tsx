import { Header } from "../Header";

describe("Header", () => {
  it("should render", () => {
    const header = (
      <Header
        title="Test"
        canGoBack={true}
        HeaderRightTitle="Test2"
        handleHeaderRightPress={() => {}}
      />
    );
    expect(header).toBeDefined();
    expect(header.props.title).toBe("Test");
    expect(header.props.HeaderRightTitle).toBe("Test2");
    expect(header.props.handleHeaderRightPress).toBeDefined();
  });
});
