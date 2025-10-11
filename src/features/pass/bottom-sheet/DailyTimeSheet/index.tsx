import clsx from "clsx";
import { useCallback, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetScrollViewMethods } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import type { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { elevation } from "@shared/tokens";
import { Button, Text } from "@shared/ui/atoms";

interface Props {
  ref: React.RefObject<BottomSheetMethods | null>;
  onPress: () => void;
}

const timeSlots = (): string[] => {
  const slots: string[] = [];

  const currentTime = new Date(0, 0, 0, 23, 30); // 현재 시간

  // 분 단위를 30분 단위로 올려 시작 시간을 구한다.
  const roundedMinutes = Math.ceil(currentTime.getMinutes() / 30) * 30;
  const startHour = roundedMinutes === 60 ? currentTime.getHours() + 1 : currentTime.getHours();
  const startMinute = roundedMinutes === 60 ? 0 : roundedMinutes;

  const startTime = new Date(0, 0, 0, startHour, startMinute); // 시작 기준 시각 (예: 20:29 -> 20:30);

  // 30분 단위로 구간 전체 생성
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const slotStart = new Date(0, 0, 0, h, m);
      const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

      if (slotStart >= startTime) {
        const startLabel = `${String(slotStart.getHours()).padStart(2, "0")}:${String(slotStart.getMinutes()).padStart(2, "0")}`;
        const endLabel = `${String(slotEnd.getHours()).padStart(2, "0")}:${String(slotEnd.getMinutes()).padStart(2, "0")}`;

        slots.push(`${startLabel} ~ ${endLabel}`);
      }
    }
  }

  return slots;
};

export default function DailyTimeSheet({ ref, onPress }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const snapPoints = ["70%"];

  const renderBackDrop = useCallback((props: BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} opacity={0.5} />, []);

  const scrollRef = useRef<BottomSheetScrollViewMethods | null>(null);
  const viewportHeight = useRef(0);
  const contentHeight = useRef(0);
  const itemY = useRef<number[]>([]);
  const itemH = useRef<number[]>([]);

  const handleSelect = (slot: string, index: number) => {
    setSelected(slot);

    requestAnimationFrame(() => {
      const vh = viewportHeight.current || 0;
      const ch = contentHeight.current || 0;
      const y = itemY.current[index] ?? 0;
      const h = itemH.current[index] ?? 42;

      const target = y - (vh / 2 - h / 2);
      const max = Math.max(0, ch - vh);
      const clamped = Math.min(Math.max(target, 0), max);

      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: clamped, animated: true });
      }
    });
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      enableDynamicSizing={false}
      backdropComponent={renderBackDrop}
      style={{ ...elevation.bottom }}
    >
      <View className="gap-5 py-6">
        {/* 고정 헤더*/}
        <View className="items-center">
          <Text typography="title-md">입차 예정 시간을 선택해 주세요.</Text>
        </View>

        <View className="px-5">
          <View className="w-full border border-neutral-400" />
        </View>

        <BottomSheetScrollView
          ref={scrollRef}
          className="h-90"
          onLayout={(e) => (viewportHeight.current = e.nativeEvent.layout.height)}
          onContentSizeChange={(_, h) => (contentHeight.current = h)}
          contentContainerStyle={{ rowGap: 32 }}
        >
          {timeSlots().map((slot, idx) => {
            const isSelected = selected === slot;

            return (
              <Pressable
                key={idx}
                onLayout={(e) => {
                  itemY.current[idx] = e.nativeEvent.layout.y;
                  itemH.current[idx] = e.nativeEvent.layout.height;
                }}
                className={clsx("h-12 justify-center", isSelected && "bg-blue-100")}
                onPress={() => handleSelect(slot, idx)}
              >
                <Text typography="body-md" className={clsx("text-center", isSelected ? "text-blue-400" : "text-neutral-800")}>
                  {slot}
                </Text>
              </Pressable>
            );
          })}
        </BottomSheetScrollView>

        <View className="px-5">
          <View className="w-full border border-neutral-400" />
        </View>

        <View className="px-5">
          <Button
            variant="label"
            label="닫기"
            palette={{
              bgColor: "bg-blue-300",
              bgPressedColor: "bg-coolgray-300",
              textColor: "text-neutral-100",
              textPressedColor: "text-coolgray-500",
            }}
            onPress={onPress}
          />
        </View>
      </View>
    </BottomSheet>
  );
}
