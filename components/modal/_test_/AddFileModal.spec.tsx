import { AddFileModal } from "../AddFileModal";

describe("AddFileModal", () => {
  it("should render", () => {
    const addFileModal = (
      <AddFileModal
        visible={true}
        onClose={() => {}}
        onAddFile={() => {}}
        onOpenCamera={() => {}}
      />
    );
    expect(addFileModal).toBeDefined();
    expect(addFileModal.props.visible).toBe(true);
    expect(addFileModal.props.onClose).toBeDefined();
    expect(addFileModal.props.onAddFile).toBeDefined();
    expect(addFileModal.props.onOpenCamera).toBeDefined();
  });
});
