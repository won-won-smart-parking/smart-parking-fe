import { Pressable, View } from "react-native";
import { Icon } from "@shared/ui/atoms";
import Avatar from "@shared/ui/atoms/avatar";

interface Props {
  profileUrl?: string;
}

export default function ProfileUploader({ profileUrl }: Props) {
  return (
    <View className="relative">
      <Pressable>
        <Avatar size="lg" profileUrl={profileUrl} />
      </Pressable>
      <Pressable
        className="h-8 w-8 items-center justify-center rounded-full bg-blue-300"
        style={{ position: "absolute", right: 3, bottom: 0 }}
      >
        <Icon name="plus" className="text-neutral-100" />
      </Pressable>
    </View>
  );
}
