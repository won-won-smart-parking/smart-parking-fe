import clsx from "clsx";
import { Pressable, PressableProps, View } from "react-native";
import Icon from "../../icon";

type Props = Required<Pick<PressableProps, "onPress">>; // ClearButton의 속성은 onPress만 필요하다.

/**
 * Input 입력값 초기화 버튼
 *
 * 초기화 버튼은 각 Input에서 입력값이 있을 때마다 초기화를 시킬 수 있는 버튼입니다.
 * 클릭 영역을 위해 4 * 0.5 === 2px과 4 * 4 === 16px을 더한 20px 영역을 가지고 있습니다.
 */
export default function ClearButton({ onPress: onClear }: Props) {
  return (
    <Pressable onPress={onClear}>
      {({ pressed }) => (
        <View className="p-0.5">
          <Icon name="cancelRounded" className={clsx("w-4", !pressed ? "text-neutral-850" : "text-neutral-900")} />
        </View>
      )}
    </Pressable>
  );
}
