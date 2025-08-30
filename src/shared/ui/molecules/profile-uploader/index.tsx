import { Pressable } from "react-native";
import Avatar from "@shared/ui/atoms/avatar";

interface Props {
  profileUrl?: string;
}

export default function ProfileUploader({ profileUrl }: Props) {
  return (
    <Pressable>
      <Avatar size="lg" profileUrl={profileUrl} />
    </Pressable>
  );
}
