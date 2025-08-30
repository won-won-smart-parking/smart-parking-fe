import { useEffect } from "react";
import { Animated, Easing, Pressable, useAnimatedValue, View, type ViewProps } from "react-native";
import { elevation } from "@shared/tokens";
import { Thumb, Track } from "./foundation";

export interface Props extends Omit<ViewProps, "children"> {
  state: boolean; // 외부에서 전달되는 On/Off 상태
  onToggle: () => void; // 토글 시 외부에 알리는 콜백
}

export default function Switch({ state, onToggle, ...rest }: Props) {
  // value가 true면 1, false면 0
  const animatedValue = useAnimatedValue(state ? 1 : 0);

  // value 상태에 따른 애니메이션
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: state ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [state, animatedValue]);

  return (
    // Press 시 onToggle 호출
    <Pressable onPress={onToggle} {...rest}>
      {({ pressed }) => (
        <View className={Track(state, pressed)} style={pressed && elevation.active}>
          <Animated.View
            className={Thumb(state, pressed)}
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
