import * as ImagePicker from "expo-image-picker";
import { useController } from "react-hook-form";
import type { SignUpFormValues } from "@/process/signup/index.type";
import ProfileUploader from "@shared/ui/molecules/profile-uploader";
import { type FormInputControllerProps } from "../controllers";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "validation.profile">, "inputField" | "rules" | "resetField">;

// Profile 등록 컴포넌트
export default function ProfileInputField({ control }: Props) {
  const {
    field: { value, onChange },
  } = useController({
    ...control,
    rules: {
      required: false,
    },
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
    });

    // 이미지를 스마트폰에서 선택한 경우
    if (!result.canceled) {
      onChange({
        imageUrl: result.assets[0].uri,
        imageName: result.assets[0].fileName ?? "profile.jpg",
        imageType: result.assets[0].mimeType ?? "image/jpeg",
      });
    }
  };

  return <ProfileUploader profileUrl={value ? value.imageUrl : ""} onPress={pickImage} />;
}
