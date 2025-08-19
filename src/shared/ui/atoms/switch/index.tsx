import { useEffect } from "react";
import { Animated, Easing, Pressable, useAnimatedValue, View, ViewProps } from "react-native";
import { elevation } from "@shared/tokens";
import { Thumb, Track } from "./switch-styles";

interface Props extends Omit<ViewProps, "children"> {
  value: boolean; // 외부에서 전달되는 On/Off 상태
  onToggle: () => void; // 토글 시 외부에 알리는 콜백
}

export default function Switch({ value, onToggle, ...rest }: Props) {
  // value가 true면 1, false면 0
  const animatedValue = useAnimatedValue(value ? 1 : 0);

  // value 상태에 따른 애니메이션
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  return (
    // Press 시 onToggle 호출
    <Pressable onPress={onToggle} {...rest}>
      {({ pressed }) => (
        <View className={Track(value, pressed)} style={pressed && elevation.active}>
          <Animated.View
            className={Thumb(value, pressed)}
            style={{
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [2, 26],
                  }),
                },
              ],
            }}
          />
        </View>
      )}
    </Pressable>
  );
}
