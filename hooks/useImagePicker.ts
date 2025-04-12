import { getDocumentAsync, DocumentPickerAsset } from "expo-document-picker";
import { launchCameraAsync, ImagePickerAsset } from "expo-image-picker";
import { File, Paths } from "expo-file-system/next";
import { router } from "expo-router";
import { useState } from "react";

type PickedFile = {
  uri: string;
  name: string;
  type?: string;
};

export const useImagePicker = () => {
  const [file, setFile] = useState<PickedFile | null>(null);

  const takePhoto = async (returnUri?: boolean) => {
    const result = await launchCameraAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
    }).then((res) => res);

    if (result.canceled) return;
    if (returnUri) {
      const asset = result.assets?.[0];
      if (asset) {
        setFile({
          uri: asset.uri,
          name: asset.fileName || asset.file?.name || `photo${asset.uri}.jpg `,
          type: asset.type,
        });
      }
      return;
    }
    router.push({
      pathname: "/new-document",
      params: {
        name: result.assets?.[0].fileName,
      },
    });
  };

  const pickFile = async (returnUri?: boolean) => {
    const result = await getDocumentAsync({
      type: ["application/pdf", "image/png", "image/jpeg"],
    }).then((res) => res);

    if (result.canceled) return;
    if (returnUri) {
      const asset = result.assets?.[0];
      if (asset) {
        setFile({
          uri: asset.uri,
          name: asset.name,
          type: asset.mimeType,
        });
      }
      return;
    }
    router.push({
      pathname: "/new-document",
      params: {
        name: result.assets?.[0].name,
      },
    });
  };

  const addToStorage = (fileName: string) => {
    try {
      const fileInDocumnets = new File(Paths.document, fileName);
      if (!fileInDocumnets.exists) {
        const file = new File(Paths.cache, fileName);
        file.create();

        file.move(Paths.document);

        return file.uri;
      }
      return fileInDocumnets.uri;
    } catch (e: unknown) {
      throw new Error("Something went wrong");
    }
  };

  return {
    takePhoto,
    pickFile,
    addToStorage,
    file,
  };
};
