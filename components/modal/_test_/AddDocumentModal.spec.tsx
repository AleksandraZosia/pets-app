import { AddDocumentModal } from "../AddDocumentModal";

describe("AddDocumentModal", () => {
  it("should render", () => {
    const addDocumentModal = (
      <AddDocumentModal
        visible={true}
        onClose={() => {}}
        onAddFile={() => {}}
        onOpenCamera={() => {}}
      />
    );
    expect(addDocumentModal).toBeDefined();
    expect(addDocumentModal.props.visible).toBe(true);
    expect(addDocumentModal.props.onClose).toBeDefined();
    expect(addDocumentModal.props.onAddFile).toBeDefined();
    expect(addDocumentModal.props.onOpenCamera).toBeDefined();
  });
});
