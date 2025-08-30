import { View } from "react-native";
import { Avatar } from "@shared/ui/atoms";
import { Text } from "@shared/ui/atoms";

interface Props {
  userImage?: string;
  userName: string;
  userEmail: string;
}

export default function UserProfile({ userImage, userName, userEmail }: Props) {
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
