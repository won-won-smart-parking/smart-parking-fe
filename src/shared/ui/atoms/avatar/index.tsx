import clsx from "clsx";
import { Image, Text, View } from "react-native";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  src?: string; // 이미지 URL
  initials?: string; // 이미지 없을 때 표시
  borderColor?: "color" | "neutral" | "300";
}

const SIZE_MAP = {
  sm: 32,
  md: 72,
  lg: 100,
};

const BORDER_WIDTH_MAP = {
  sm: 1,
  md: 2,
  lg: 4,
};

const BORDER_COLOR_MAP = {
  color: "#3B82F6", // 예시: Tailwind blue-500
  neutral: "#9CA3AF", // Tailwind neutral-400
  "300": "#D1D5DB", // Tailwind neutral-300
};

export default function Avatar({ size = "sm", src, initials, borderColor = "color" }: AvatarProps) {
  const avatarSize = SIZE_MAP[size];
  const borderWidth = BORDER_WIDTH_MAP[size];
  const borderClr = BORDER_COLOR_MAP[borderColor];

  return (
    <View
      className={clsx(
        "items-center justify-center overflow-hidden rounded-full",
        "bg-gray-300", // 이미지 없을 때 기본 배경
      )}
      style={{
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2,
        borderWidth,
        borderColor: borderClr,
      }}
    >
      {src ? (
        <Image
          source={{ uri: src }}
          style={{
            width: avatarSize - borderWidth * 2,
            height: avatarSize - borderWidth * 2,
            borderRadius: (avatarSize - borderWidth * 2) / 2,
          }}
        />
      ) : (
        <Text className="font-bold text-white" style={{ fontSize: avatarSize / 2.5 }}>
          {initials}
        </Text>
      )}
    </View>
  );
}
