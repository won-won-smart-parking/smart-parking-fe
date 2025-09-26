// import axios from "axios";
// import { useNavigation } from "expo-router";
// import { useEffect } from "react";
// import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { create } from "zustand";
import SignUpForm from "@/process/signup";

// import { Text } from "@shared/ui/atoms";

// import { useQuery } from "@tanstack/react-query";

// const fetchUser = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response;
// };

// interface ZustandStateProps {
//   count: number;
//   increase: () => void;
//   decrease: () => void;
// }

// const useZustandStore = create<ZustandStateProps>((set, get) => {
//   return {
//     count: 1,
//     increase() {
//       const { count } = get();
//       set({ count: count + 1 });
//     },
//     decrease() {
//       const { count } = get();
//       set({ count: count - 1 });
//     },
//   };
// });

// const instance = axios.create({
//   adapter: "fetch",
//   baseURL: "https://api.example.com",
// });

// smartparking://
export default function MainScreen() {
  // const count = useZustandStore((state) => state.count);

  // const { isLoading, isError } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: fetchUser,
  // });

  // if (isLoading) return <Text>Lodaing...</Text>;
  // if (isError) return <Text>Error...</Text>;

  // const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      {/* <Text typography="display-default">메인 페이지{count}</Text> */}

      {/* 
        navigation.openDrawer를 통해 사이드메뉴를 열 수 있다.
        [공식 문서 참고](https://reactnavigation.org/docs/drawer-based-navigation/)
      */}
      {/* <Button title="Open drawer menu!!" onPress={() => navigation.openDrawer()} /> */}
      <SignUpForm />
    </SafeAreaView>
  );
}
