import { Image, View } from "react-native";
import Icon from "@/shared/ui/atoms/icon";
import { avatarBorder, avatarSize } from "./avatar-styles";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  image?: string;
}

export default function Avatar({ size = "md", image }: AvatarProps) {
  const sizeStyle = avatarSize[size];
  const borderStyle = avatarBorder[size];

  return (
    <View className={`${sizeStyle} ${borderStyle} items-center justify-center rounded-full bg-coolgray-300`}>
      {image ? (
        <Image source={{ uri: image }} className="h-full w-full rounded-full" resizeMode="cover" />
      ) : (
        <Icon name="userOutlined" className="h-1/2 w-1/2 text-coolgray-500" />
      )}
    </View>
  );
}
