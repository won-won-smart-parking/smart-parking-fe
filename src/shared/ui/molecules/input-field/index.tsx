import { View } from "react-native";
import { Button, Text } from "@shared/ui/atoms";
import { UnderlineInputProps } from "@shared/ui/atoms/input/variant";
import { HelperText, TextInput } from "./part";

interface Props {
  label: string;
  input: UnderlineInputProps;
  message?: string;
  button?: {
    label: string;
    onPress: () => void;
    disabled?: boolean;
  };
}

export default function InputField({ label, input, message = "", button }: Props) {
  return (
    <View className="gap-2">
      {/* Input Fiedl 제목(Title) */}
      <Text typography="label-tight" className="text-neutral-900">
        {label}
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
              disabled={input.state === "disabled"}
              overrideButtonContainerStyles="min-w-24 rounded-[4px]"
              palette={{
                bgColor: input.state === "disabled" ? "bg-neutral-500" : "bg-blue-300",
                bgPressedColor: input.state === "disabled" ? "bg-neutral-600" : "bg-blue-400",
                textColor: input.state === "disabled" ? "text-neutral-870" : "text-neutral-100",
                textPressedColor: input.state === "disabled" ? "text-neutral-800" : "text-neutral-300",
              }}
            />
          ) : null}
        </View>

        {message ? <HelperText state={input.state} message={message} /> : null}
      </View>
    </View>
  );
}

/**
 * [NOTE]
 * - Input Field 우측 액션 버튼 리팩토링 시 별도 컴포넌트로 분리
 * - Input Field 내 Input과 Button의 disabled 상태 동작 검증
 */
