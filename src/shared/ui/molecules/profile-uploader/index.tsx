import { Pressable, View } from "react-native";
import { Avatar, Icon } from "@shared/ui/atoms";

interface Props {
  profileUrl: string;
  onPress?: () => void;
}

export default function ProfileUploader({ profileUrl, onPress }: Props) {
  return (
    // 전체 레이아웃(아바타 + 업로드 버튼) 클릭 시 업로드 기능 활성화
    <Pressable onPress={onPress} className="relative">
      <Avatar size="lg" profileUrl={profileUrl} />

      {/* 업로드 버튼 아이콘 (시각적 구분) */}
      <View className="absolute bottom-0 right-0 h-8 w-8 items-center justify-center rounded-full bg-blue-300">
        <Icon name="plus" className="text-neutral-100" />
      </View>
    </Pressable>
  );
}
