import clsx from "clsx";
import React, { useEffect } from "react";
import { Animated, Easing, useAnimatedValue } from "react-native";
import { twMerge } from "tailwind-merge";
import { Icon } from "@shared/ui/atoms";

export type StepStatus = "inactive" | "active" | "completed";
interface Props {
  status: StepStatus;
}

export function StepCircle({ status }: Props) {
  const circleWaveScale = useAnimatedValue(1);

  useEffect(() => {
    let loopAnimation: Animated.CompositeAnimation | null = null;

    // 현재 회원가입 단계인 경우 바깥 원 애니메이션 수행
    if (status === "active") {
      loopAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(circleWaveScale, {
            toValue: 1.4,
            duration: 1000,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(circleWaveScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ]),
      );

      loopAnimation.start();
    } else {
      circleWaveScale.setValue(1);
    }

    return () => {
      loopAnimation?.stop();
    };
  }, [circleWaveScale, status]);

  return (
    <Animated.View className="items-center justify-center">
      <Animated.View
        style={{ transform: [{ scale: circleWaveScale }] }}
        className={clsx("absolute h-8 w-8 rounded-full", status === "active" && "bg-blue-300 opacity-20")}
      />
      <Animated.View
        className={twMerge(
          clsx(
            "h-7 w-7 items-center justify-center rounded-full border-[7px]",
            status === "inactive" && "border-coolgray-300 bg-neutral-100",
            status === "active" && "border-blue-300 bg-neutral-100",
            status === "completed" && "border-0 bg-blue-300",
          ),
        )}
      >
        {status === "completed" && <Icon name="check" className="text-neutral-100" />}
      </Animated.View>
    </Animated.View>
  );
}
