import { Item } from "../Item";

describe("Item", () => {
  it("should render", () => {
    const item = (
      <Item
        date="2021-01-01"
        title="Test"
        type="document"
        time="12:00"
        description="Test that tests the tested "
        hasDot={true}
      />
    );
    expect(item).toBeDefined();
    expect(item.props.date).toBe("2021-01-01");
    expect(item.props.title).toBe("Test");
    expect(item.props.type).toBe("document");
    expect(item.props.time).toBe("12:00");
    expect(item.props.description).toBe("Test that tests the tested ");
    expect(item.props.hasDot).toBe(true);
  });
});
