import { View } from "react-native";
import Avatar from "@shared/ui/atoms/avatar";
import Text from "@shared/ui/atoms/text";

interface Props {
  userImage?: string;
  userName: string;
  userEmail: string;
}

export default function UserProfile({ userImage, userName, userEmail }: Props) {
  return (
    <View>
      <Avatar size="md" profileUrl={userImage} />
      <Text typography="title-md">{userName}</Text>
      <Text typography="description-md">{userEmail}</Text>
    </View>
  );
}
