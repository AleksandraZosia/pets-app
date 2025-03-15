import { DefaultPage } from "../DefaultPage";
import { Text } from "react-native";

describe("DefaultPage", () => {
  it("should render", () => {
    const defaultPage = (
      <DefaultPage>
        <Text>Test</Text>
      </DefaultPage>
    );
    expect(defaultPage).toBeDefined();
    expect(defaultPage.props.children).toMatchObject(<Text>Test</Text>);
  });
});
