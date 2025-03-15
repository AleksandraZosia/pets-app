import { TabBarLabel } from "../TabBarLabel";
import { Text } from "react-native";

describe("TabBarLabel", () => {
  it("should render", () => {
    const tabBarLabel = <TabBarLabel children={<Text>Test</Text>} />;
    expect(tabBarLabel).toBeDefined();
    expect(tabBarLabel.props.children).toMatchObject(<Text>Test</Text>);
  });
});
