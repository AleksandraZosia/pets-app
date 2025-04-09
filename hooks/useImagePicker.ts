import { getDocumentAsync } from "expo-document-picker";
import { launchCameraAsync } from "expo-image-picker";
import { router } from "expo-router";

export const useImagePicker = () => {
  const takePhoto = async (returnResult?: boolean) => {
    const result = await launchCameraAsync({
      mediaTypes: ["images"],
      aspect: [1, 1],
    });

    if (result.canceled) return;
    if (returnResult) return result;
    router.push({
      pathname: "/new-document",
      params: {
        name: result.assets?.[0].fileName,
      },
    });
  };

  const pickFile = async (returnResult?: boolean) => {
    let result = await getDocumentAsync({
      type: ["application/pdf", "image/png", "image/jpeg"],
    });

    if (result.canceled) return;
    if (returnResult) return result;
    router.push({
      pathname: "/new-document",
      params: {
        name: result.assets?.[0].name,
      },
    });
  };

  return {
    takePhoto,
    pickFile,
  };
};
