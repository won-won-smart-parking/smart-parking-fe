import { useEffect, useState } from "react";
import { Animated, Button, Dimensions, Modal, Pressable, useAnimatedValue, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export interface Props {
  show: boolean;
  value: Date;
  onConfirm: (selectedDate: Date) => void;
  onCancel: () => void;
}

// iOS 환경 DateTimePicker 컴포넌트
export default function IOSDateTimePicker({ show, value, onConfirm, onCancel }: Props) {
  const { fadeAnimation, slideAnimation } = useDatePickerShowAnimation(show); // 애니메이션 커스텀 훅
  const [selectedValue, setSelectedValue] = useState<Date>();

  return (
    <Modal animationType="fade" transparent className="bg-overlay-black-40" visible={show}>
      {/* Background */}
      <Pressable className="absolute inset-0" onPress={onCancel}>
        <Animated.View className="absolute inset-0 bg-overlay-black-40" style={{ opacity: fadeAnimation }} />
      </Pressable>

      {/* Date Picker Content */}
      <Animated.View className="absolute w-full gap-4 px-3" style={{ transform: [{ translateY: slideAnimation }] }}>
        <View className="items-center gap-1.5 rounded-xl bg-neutral-600 p-2">
          <DateTimePicker
            value={value}
            mode="date"
            display="spinner"
            maximumDate={new Date()} // 애플리케이션 실행 날짜를 최대값으로 지정하여 이 이후의 값은 선택 못하게 구성한다.
            onChange={(_, selectedDate) => {
              // Spinner가 변경될 때마다 onChange 값이 변경되기 때문에 임시로 저장하여 확인을 눌렀을 때 해당 값을 저장해야 한다.
              if (selectedDate) {
                setSelectedValue(selectedDate);
              }
            }}
            locale="ko-KR"
          />

          {/* 확인 버튼을 누르면 기존 set 동작을 수행한다. */}
          <View className="w-full border-t border-neutral-700 p-1">
            <Button title="확인" onPress={() => selectedValue?.constructor.name === "Date" && onConfirm(selectedValue)} />
          </View>
        </View>

        {/* 취소 버튼을 누르면 기존의 dismissed 동작을 수행한다. */}
        <View className="rounded-xl bg-neutral-600 px-2 py-2.5">
          <Button title="취소" onPress={onCancel} />
        </View>
      </Animated.View>
    </Modal>
  );
}

// iOS 환경의 Date Picker에서만 애니메이션이 적용되기 떄문에 별도의 파일을 생성하지 않고,
// 커스텀 훅을 작동할 수 있는 함수를 컴포넌트 파일 내부에 로직을 작성함
const { height: scrennHeight } = Dimensions.get("screen"); // Bottom Slide 애니메이션을 위한 스크린의 높이값을 가져온다.
function useDatePickerShowAnimation(show: boolean) {
  const fadeAnimation = useAnimatedValue(0);
  const slideAnimation = useAnimatedValue(scrennHeight - 10);

  useEffect(() => {
    if (show) {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();

      Animated.timing(slideAnimation, {
        toValue: scrennHeight - 458,
        useNativeDriver: true,
        duration: 600,
      }).start();
    } else {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }).start();

      Animated.timing(slideAnimation, {
        toValue: scrennHeight,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [show, fadeAnimation, slideAnimation]);

  return { fadeAnimation, slideAnimation };
}
