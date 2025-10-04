import { View } from "react-native";
import { Button, Text } from "@shared/ui/atoms";
import { UnderlineInputProps } from "@shared/ui/atoms/input/variant";
import { HelperText, TextInput } from "./part";

export interface Props {
  title: string;
  input: UnderlineInputProps;
  message?: string;
  button?: {
    label: string;
    onPress: () => void;
    disabled?: boolean;
  };
}

/*
  InputField - Props 구성
  - label: 인풋의 제목
  - input: **Underline - Props 구성**
  - message?: HelperText
  - button?: {
    - label -> 버튼의 텍스트 내용
    - onPress -> 버튼 클릭 시 발생하는 press 이벤트 핸들러
    - disabled -> 버튼 비활성화 여부	
  }

  Underline - Props 구성
  - InputRequiredProps
    - value
    - placeholder
    - onChangeText
    - onPress ( 인풋 값 전체 삭제를 위한 press 이벤트 핸들러 )
  
  - state: InputState("default" | "focus" | "error" | "disabled")
  - onClearPress: () => void: 인풋 내용 전체 삭제 속성
  - icon?:
    - revealed: 아이콘 hidden, visiable 상태 여부
    - hidden: 숨겨진 상태에서의 아이콘 이름
    - visiable:: 보여짐 상태에서의 아이콘 이름
    - onPress: 아이콘 클릭 시 변경 상태
*/

/**
 * Molecular / Input Field
 *
 * Atom 단위의 Text, Input, Button 컴포넌트를 조합하여 입력 영역의 UI를 구성하는 컴포넌트입니다.
 * 로그인, 회원가입, 차량 등록/수정 등 다양한 화면에서 재사용되며, 비즈니스 로직은 포함되지 않았습니다.
 */
export default function InputField({ title, input, message = "", button }: Props) {
  return (
    <View className="w-full gap-1">
      {/* Input Fiedl 제목(Title) */}
      <Text typography="label-tight" className="text-neutral-900">
        {title}
      </Text>

      {/* Input Field 인풋 + 헬퍼 텍스트 구성 레이아웃 */}
      <View className="gap-1">
        <View className="flex-row items-center gap-4">
          <TextInput {...input} />
          {button ? (
            <Button
              variant="label"
              typography="label-tight"
              label={button.label}
              onPress={button.onPress}
              disabled={button.disabled}
              overrideButtonContainerStyles="min-w-24 rounded-[4px]"
              palette={{
                bgColor: button.disabled ? "bg-neutral-500" : "bg-blue-300",
                bgPressedColor: button.disabled ? "bg-neutral-600" : "bg-blue-400",
                textColor: button.disabled ? "text-neutral-870" : "text-neutral-100",
                textPressedColor: button.disabled ? "text-neutral-800" : "text-neutral-300",
              }}
            />
          ) : null}
        </View>

        <HelperText state={input.state} message={message} />
      </View>
    </View>
  );
}

/**
 * [NOTE]
 * - Input Field 우측 액션 버튼 리팩토링 시 별도 컴포넌트로 분리
 * - Input Field 내 Input과 Button의 disabled 상태 동작 검증
 * - Input Field JSDoc 주석 @param + @returns 내용 추가
 */
