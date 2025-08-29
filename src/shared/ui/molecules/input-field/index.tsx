import { Button, View } from "react-native";
import { Text } from "@shared/ui/atoms";
import { UnderlineInputProps } from "@shared/ui/atoms/input/variant";
import { HelperText, TextInput } from "./part";

// import TextInput from "./part/TextInput";

interface Props {
  label: string;
  input: UnderlineInputProps;
  message?: string;
}

export default function InputField({ label, input, message = "" }: Props) {
  return (
    <View className="gap-2">
      {/* Input Fiedl 제목(Title) */}
      <Text typography="label-tight" className="text-neutral-900">
        {label}
      </Text>

      {/* Input Field 인풋 + 헬퍼 텍스트 구성 레이아웃 */}
      <View className="gap-1">
        <View className="flex-row gap-4">
          <TextInput {...input} />
          <Button title="Label" />
        </View>

        {message ? <HelperText state={input.state} message={message} /> : null}
      </View>
    </View>
  );
}
