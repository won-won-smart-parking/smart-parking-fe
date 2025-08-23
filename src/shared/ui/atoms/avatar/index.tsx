import { Image, View } from "react-native";
import Icon from "@/shared/ui/atoms/icon";
import { avatarBorder, avatarSize } from "./avatar-styles";

interface AvatarProps {
  size?: "sm" | "md" | "lg"; // 아바타 크기 (기본값: md)
  image?: string; // 외부에서 받아오는 이미지 URL
}

export default function Avatar({ size = "md", image }: AvatarProps) {
  const sizeStyle = avatarSize[size]; // 크기 (32 / 72 / 100)
  const borderStyle = avatarBorder[size]; // border 두께 (1 / 2 / 4, neutral-300)

  return (
    <View className={`${sizeStyle} ${borderStyle} items-center justify-center rounded-full bg-coolgray-300`}>
      {image ? (
        // 이미지 등록될 경우
        <Image source={{ uri: image }} className="h-full w-full rounded-full" resizeMode="cover" />
      ) : (
        // 이미지가 없으면, 기본 아이콘
        <Icon name="userOutlined" className="h-1/2 w-1/2 text-coolgray-500" />
      )}
    </View>
  );
}
