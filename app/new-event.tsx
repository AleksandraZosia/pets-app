import { PageWithoutNavigation, Header } from "@/components";
import { View, Text } from "react-native";

export default function NewEvent() {
  return (
    <PageWithoutNavigation>
      <Header
        title="Nowe wydarzenie"
        canGoBack={true}
        HeaderRightTitle="Zapisz"
      />
      <View>
        <Text>Nowe wydarzenie</Text>
      </View>
    </PageWithoutNavigation>
  );
}
