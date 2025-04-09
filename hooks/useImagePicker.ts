import { getDocumentAsync } from "expo-document-picker";
import { launchCameraAsync } from "expo-image-picker";
import { File, Paths } from "expo-file-system/next";
import { router } from "expo-router";

export const useImagePicker = () => {
  const takePhoto = async (returnUri?: boolean) => {
    const result = await launchCameraAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
    }).then((res) => res);

    if (result.canceled) return;
    if (returnUri) return result.assets?.[0].uri;
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
    if (returnUri) return result.assets?.[0].uri;
    router.push({
      pathname: "/new-document",
      params: {
        name: result.assets?.[0].name,
      },
    });
  };

  const addToStorage = (fileName: string) => {
    const file = new File(Paths.cache, fileName ?? "");
    file.create();

    file.move(Paths.document);

    return file.uri;
  };

  return {
    takePhoto,
    pickFile,
    addToStorage,
  };
};
