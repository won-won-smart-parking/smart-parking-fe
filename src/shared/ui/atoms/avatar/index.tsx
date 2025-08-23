import { Image, View } from "react-native";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  image?: string;
}

export default function Avatar({ image }: AvatarProps) {
  return (
    <View className="h-[72px] w-[72px] items-center justify-center rounded-full bg-coolgray-300">
      {image && <Image source={{ uri: image }} className="h-full w-full rounded-full" resizeMode="cover" />}
    </View>
  );
}
