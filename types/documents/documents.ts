export type Document = {
  id: string;
  name: string;
  description: string | null;
  petId: string;
  eventIds: string[] | null;
  petName: string;
  type: DocumentType;
  fileUri: string;
  createdAt: Date;
};

export type DocumentType = "pdf" | "jpg" | "png" | "img" | "jpeg";
export type Documents = Document[];
