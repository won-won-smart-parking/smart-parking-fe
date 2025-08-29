import { View } from "react-native";
import Text from "@shared/ui/atoms/text";

interface Props {
  userImage?: string;
  userName: string;
  userEmail: string;
}

export default function UserProfile({ userName, userEmail }: Props) {
  return (
    <View>
      <Text typography="title-md">{userName}</Text>
      <Text typography="description-md">{userEmail}</Text>
    </View>
  );
}
