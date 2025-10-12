import clsx from "clsx";
import { useCallback, useRef, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import BottomSheetHeader from "@features/pass/part/BottomSheetHeader";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetScrollViewMethods,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import type { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Button, Icon, Text } from "@shared/ui/atoms";

interface Props {
  ref: React.RefObject<BottomSheetMethods | null>;
  onPress: () => void;
}

const timeSlots = (): string[] => {
  const slots: string[] = [];

  const currentTime = new Date(); // 현재 시간

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
  const snapPoints = ["84%"];

  const renderBackDrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.6} />,
    [],
  );

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

  const renderItem = ({ item }: { item: { id: number; component: React.ReactElement } }) => {
    return (
      // 각 아이템을 감싸는 View. flex-row로 자식 요소들을 가로로 배치합니다.
      <View className="flex-row">
        {/* level이 0이면 불릿을 표시하고, 
        아니라면 level에 비례하는 왼쪽 마진을 주어 들여쓰기를 구현합니다.
      */}
        <Text typography="caption-md" className="mr-1.5 text-neutral-900">
          &middot;
        </Text>

        {/* 텍스트 내용을 감싸는 View. flex: 1로 남은 공간을 모두 차지하게 합니다. */}
        {/* 이 부분이 텍스트 줄바꿈 시 정렬을 유지하는 핵심입니다. */}
        <View className="flex-1">{item.component}</View>
      </View>
    );
  };

  const infoSheetRef = useRef<BottomSheetModal | null>(null);

  return (
    <BottomSheetModalProvider>
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        backdropComponent={renderBackDrop}
      >
        <View className="flex-1 pt-6">
          {/* 고정 헤더*/}
          <BottomSheetHeader title="입차 예정 시간을 선택해 주세요." />

          <BottomSheetScrollView
            ref={scrollRef}
            onLayout={(e) => (viewportHeight.current = e.nativeEvent.layout.height)}
            onContentSizeChange={(_, h) => (contentHeight.current = h)}
            contentContainerStyle={{ rowGap: 12 }}
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
                  className={clsx("justify-center py-4", isSelected && "bg-blue-100")}
                  onPress={() => handleSelect(slot, idx)}
                >
                  <Text typography="body-md" className={clsx("text-center", isSelected ? "text-blue-400" : "text-neutral-800")}>
                    {slot}
                  </Text>
                </Pressable>
              );
            })}
          </BottomSheetScrollView>

          <View className="gap-4 bg-coolgray-100 p-5">
            <View className="gap-2">
              <FlatList
                data={[
                  {
                    id: 1,
                    component: (
                      <Text typography="caption-md" className="text-neutral-900">
                        당일 구매 및 사용만 가능합니다.
                      </Text>
                    ),
                  },
                  {
                    id: 2,
                    component: (
                      <View className="flex-row flex-wrap">
                        <Text typography="caption-md" className="text-neutral-900">
                          입차 예정 시간에서 벗어나도 <Text className="text-red-300">주차권 유효시간 내에 입차 시 이용 가능</Text>
                          합니다.
                        </Text>
                        <Pressable onPress={() => infoSheetRef.current?.present()}>
                          <View className="flex-row items-center gap-1">
                            <Text typography="caption-md" className="text-neutral-900 underline">
                              입차 예정 시간 안내
                            </Text>
                            <Icon name="arrowRight" className="w-2 text-neutral-900" />
                          </View>
                        </Pressable>
                      </View>
                    ),
                  },
                ]}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                // 각 아이템 사이에 8px의 수직 간격을 추가합니다.
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              />
            </View>

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

      <BottomSheetModal ref={infoSheetRef} backdropComponent={renderBackDrop}>
        <BottomSheetView className="gap-4 p-6">
          <View>
            <Text typography="heading-md" className="text-center">
              입차 예정 시간 안내
            </Text>
          </View>

          <View className="items-center gap-3">
            <Text typography="body-md" className="text-center font-normal">
              입차 예정 시간보다 빨리 또는 늦게 입차해도{" "}
              <Text typography="body-md" className="text-blue-400">
                유효시간 내에만 입차
              </Text>
              하면 이용이 가능합니다.
            </Text>

            <Text typography="caption-sm" className="text-neutral-900">
              &#8251;​​ 유효시간을 벗어날 경우 사용이 불가능합니다.
            </Text>
          </View>

          <Button
            variant="label"
            label="닫기"
            palette={{
              bgColor: "bg-blue-300",
              bgPressedColor: "bg-coolgray-300",
              textColor: "text-neutral-100",
              textPressedColor: "text-coolgray-500",
            }}
            onPress={() => infoSheetRef.current?.close()}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
