import { View } from "react-native";
import Avatar from "@shared/ui/atoms/avatar";
import Text from "@shared/ui/atoms/text";

interface Props {
  isLogIn: boolean;
  userImage?: string;
  userName?: string;
  userEmail?: string;
}

export default function UserProfile({ isLogIn, userImage, userName, userEmail }: Props) {
  if (!isLogIn) {
    return (
      <View className="items-center">
        <Text typography="caption-xxl" className="text-neutral-1000">
          로그인 후 다양한 기능을 이용해 보세요
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-row items-center justify-center gap-6">
      <Avatar size="md" profileUrl={userImage} />
      <View className="gap-1">
        <Text typography="title-md" className="text-neutral-1000">
          {userName}
        </Text>
        <Text typography="description-md" className="text-neutral-850">
          {userEmail}
        </Text>
      </View>
    </View>
  );
}
