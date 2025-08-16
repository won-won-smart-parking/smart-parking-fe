import { useEffect, useState } from "react";
import { Animated, Easing, Pressable, View, ViewProps } from "react-native";
import shadowStyles from "@shared/tokens/elevation";
import { Thumb, Track } from "./variants";

interface Props extends Omit<ViewProps, "children"> {
  value?: boolean;
  defaultValue?: boolean;
  onToggle?: (value: boolean) => void;
}

// 외부에서 값이 안 들어오면 기본으로 꺼진 상태 (defaultValue)
export default function Switch({ value, defaultValue = false, onToggle, ...rest }: Props) {
  // 외부 value가 없으면 defaultValue 사용
  const [isOn, setIsOn] = useState(value ?? defaultValue);

  useEffect(() => {
    if (value !== undefined) setIsOn(value);
  }, [value]);

  // 스위치 토글 함수
  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onToggle?.(newValue);
  };

  // 0: off, 1: on
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 26],
  });

  return (
    <Pressable onPress={toggle} {...rest}>
      {({ pressed }) => (
        <View className={Track(isOn, pressed)} style={pressed ? shadowStyles.active : undefined}>
          <Animated.View className={Thumb(isOn, pressed)} style={{ transform: [{ translateX }] }} />
        </View>
      )}
    </Pressable>
  );
}
