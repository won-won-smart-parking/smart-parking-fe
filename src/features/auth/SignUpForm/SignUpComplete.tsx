import React from "react";
import { Image, View } from "react-native";
import { Text } from "@shared/ui/atoms";

export default function SignUpComplete() {
  return (
    <View className="items-center gap-6">
      <Image alt="confetti" source={require("@shared/assets/images/confetti.png")} />

      <View className="items-center">
        <Text typography="heading-md">가입이 완료되었어요!</Text>
        <View className="flex-row">
          <Text typography="heading-md" className="text-blue-400">
            Smart Parking
          </Text>
          <Text typography="heading-md">을 이용해보세요.</Text>
        </View>
      </View>
    </View>
  );
}
