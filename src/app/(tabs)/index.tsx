import axios from "axios";
import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response;
};

// smartparking://
export default function MainScreen() {
  const { isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  if (isLoading) return <Text>Lodaing...</Text>;
  if (isError) return <Text>Error...</Text>;

  return (
    <View className="flex-1 items-center justify-center">
      <Text typography="display-default">메인 페이지</Text>
    </View>
  );
}
