import { Pressable, PressableProps, View } from "react-native";
import { Icon, Radio, Text } from "@shared/ui/atoms";
import { IconName } from "@shared/ui/atoms/icon/variant";

interface Props extends Required<Pick<PressableProps, "onPress">> {
  label: string;
  iconName: IconName;
  selected: boolean;
}

/**
 * Molecular / Radio Item
 *
 * Atom / Radio + Text를 조합하여 만든 Radio 리스트 아이템 컴포넌트입니다. 비즈니스 로직은 포함하지 않습니다.
 *
 * @param props.label        동의 항목에 대한 설명 문구
 * @param props.selected     해당 동의 항목이 선택되었는지 여부
 * @param props.onPress      동의 항목을 눌렀을 때 호출되는 이벤트 핸들러
 *
 * @example
 * <RadioItem
 *  label={"label >"}
 *  selected={selectedState}
 *  onPress={() => ...}
 * />
 *
 * @returns ReactElement Molecular / Radio Item
 */
export default function RadioItem({ label, iconName, selected, onPress }: Props) {
  return (
    <Pressable className="flex-row gap-3" onPress={onPress}>
      {({ pressed }) => (
        <>
          <Radio selected={selected} pressed={pressed} />
          <View className="flex-row items-center gap-2">
            <Icon name={iconName} />
            <Text typography="description-md">{label}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

/**
 * [ NOTE ]
 * - tosspay, naverpay 등의 Radio Item에서 사용되는 아이콘의 크기는 1:1 비율이 아니기 때문에
 * - Atom / Icon 코드 수정 필요
 */
