import { Pressable, View } from "react-native";
import Avatar from "@shared/ui/atoms/avatar";
import Icon from "@shared/ui/atoms/icon";

interface Props {
  profileUrl?: string;
}

export default function ProfileUploader({ profileUrl }: Props) {
  return (
    <View className="relative">
      <Pressable>
        <Avatar size="lg" profileUrl={profileUrl} />
      </Pressable>

      {/* 업로드 버튼 */}
      <Pressable
        className="h-8 w-8 items-center justify-center rounded-full bg-blue-300"
        style={{ position: "absolute", right: 3, bottom: 0 }}
      >
        <Icon name="plus" className="text-neutral-100" />
      </Pressable>
    </View>
  );
}
