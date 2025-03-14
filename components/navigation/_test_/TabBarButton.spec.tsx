import { TabBarButton } from "../TabBarButton";
import { Text } from "react-native";
describe("TabBarButton", () => {
  it("should render", () => {
    const tabBarButton = (
      <TabBarButton
        to="/pets"
        children={<Text>Test</Text>}
        style={{}}
        onPress={() => {}}
      />
    );
    expect(tabBarButton).toBeDefined();
    expect(tabBarButton.props.to).toBe("/pets");
    expect(tabBarButton.props.children).toMatchObject(<Text>Test</Text>);
    expect(tabBarButton.props.style).toBeDefined();
    expect(tabBarButton.props.onPress).toBeDefined();
  });
});
