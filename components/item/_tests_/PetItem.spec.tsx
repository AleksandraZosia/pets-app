import { PetItem } from "../PetItem";

describe("PetItem", () => {
  it("should render", () => {
    const petItem = (
      <PetItem
        onPress={() => {}}
        petPhoto="/kromka.png"
        petName="Test"
        petAge={1}
      />
    );

    expect(petItem).toBeDefined();
    expect(petItem.props.onPress).toBeDefined();
    expect(petItem.props.petPhoto).toBe("/kromka.png");
    expect(petItem.props.petName).toBe("Test");
    expect(petItem.props.petAge).toBe(1);
  });
});
