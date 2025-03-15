import { PageWithoutNavigation } from "../PageWithoutNavigation";
import { Text } from "react-native";

describe("PageWithoutNavigation", () => {
  it("should render", () => {
    const pageWithoutNavigation = (
      <PageWithoutNavigation>
        <Text>Test</Text>
      </PageWithoutNavigation>
    );
    expect(pageWithoutNavigation).toBeDefined();
    expect(pageWithoutNavigation.props.children).toMatchObject(
      <Text>Test</Text>
    );
  });
});
