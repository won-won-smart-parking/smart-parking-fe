import { Image, View } from "react-native";
import { Icon } from "@shared/ui/atoms";
import { type AvatarSize, avatarSizeStyle } from "./foundation/styles";

interface Props {
  size?: AvatarSize; // 아바타 크기
  profileUrl?: string; // 외부에서 받아오는 이미지 URL
}

export default function Avatar({ size = "md", profileUrl }: Props) {
  const sizeStyle = avatarSizeStyle[size];

  return (
    <View className={`${sizeStyle} items-center justify-center rounded-full border-neutral-300 bg-coolgray-300`}>
      {profileUrl ? (
        // 이미지 등록될 경우
        <Image source={{ uri: profileUrl }} className="h-full w-full rounded-full" resizeMode="cover" />
      ) : (
        // 이미지가 없으면, 기본 아이콘
        <Icon name="userOutlined" className="w-1/2 text-coolgray-500" />
      )}
    </View>
  );
}
