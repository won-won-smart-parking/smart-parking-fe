import { Pressable, View } from "react-native";
import { Avatar, Icon } from "@shared/ui/atoms";

interface Props {
  profileUrl?: string;
  onPress?: () => void;
}

export default function ProfileUploader({ profileUrl, onPress }: Props) {
  return (
    <View className="relative">
      <Pressable>
        <Avatar size="lg" profileUrl={profileUrl} />
      </Pressable>

      {/* 업로드 버튼 */}
      <Pressable
        onPress={onPress}
        className="absolute bottom-0 right-0 h-8 w-8 items-center justify-center rounded-full bg-blue-300"
      >
        <Icon name="plus" className="text-neutral-100" />
      </Pressable>
    </View>
  );
}
