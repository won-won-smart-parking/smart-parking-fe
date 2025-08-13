import React from "react";
import { View } from "react-native";
import Text from "@/shared/tokens/typography/Text";

type TagStatus = "available" | "busy" | "full";

interface TagProps {
  status: TagStatus;
}

const TagVariant = {
  available: { label: "여유", background: "bg-green-100", text: "text-green-200" },
  busy: { label: "혼잡", background: "bg-orange-100", text: "text-orange-200" },
  full: { label: "만차", background: "bg-red-100", text: "text-red-200" },
};

export default function Tag({ status }: TagProps) {
  const { label, background, text } = TagVariant[status];

  return (
    <View className={`items-center justify-center rounded-full px-3 py-1 ${background}`}>
      <Text className={text} variant="caption-xl">
        {label}
      </Text>
    </View>
  );
}
