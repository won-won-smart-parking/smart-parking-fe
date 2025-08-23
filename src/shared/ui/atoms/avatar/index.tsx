import { Image, View } from "react-native";
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
      {image && <Image source={{ uri: image }} className="h-full w-full rounded-full" resizeMode="cover" />}
    </View>
  );
}
