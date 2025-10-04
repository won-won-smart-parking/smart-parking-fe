import clsx from "clsx";
import { useController } from "react-hook-form";
import { Pressable, View } from "react-native";
import { SignUpFormValues } from "@/process/signup";
import { Text } from "@shared/ui/atoms";
import { Props as FormInputControllerProps } from "../FormInputController";

type Props = Omit<FormInputControllerProps<SignUpFormValues, "validation.birthday">, "inputField" | "rules"> & {
  state: "focus" | "default";
  setState: React.Dispatch<React.SetStateAction<"focus" | "default">>;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
};

// Date Input Field 컴포넌트
/*
  [ Note ]
  - Date Input Field 같은 경우 Press 이벤트가 발생했을 때 Date Picker 컴포넌트 노출되야 한다.
  - 그렇기 때문에 처음에는 focus 이벤트 발생 시 Date Picker 컴포넌트 노출시켰지만, TextInput 컴포넌트 특성 상 포커스된 상태에서 글자를 입력할 수 있다.
  - 이로 인해서, Text Input 발동 시 키보드가 나와버리기 때문에 Date Picker가 노출되도 문제가 발생하여
  - 임시 방편책으로 기존 Text Input 컴포넌트와 동일한 스타일이지만, Pressable 기반 컴포넌트로 수정하였다.
  - 차후, React Native 환경을 고려해 Atom / Input 컴포넌트를 단순 TextInput만 다루는게 아닌 variant에 따른 조건부 렌더링으로 구성을 해야될 것 같다.
*/
export default function DateInputField({ control, state, setState, setIsShow }: Props) {
  const {
    field: { value },
  } = useController<SignUpFormValues>({
    ...control,
    rules: {
      required: true,
    },
  });

  const handleDateInputPress = () => {
    setIsShow(true);
    setState("focus");
  };

  return (
    <Pressable onPress={handleDateInputPress} className="w-full">
      <View className="gap-1">
        {/* Input Fiedl 제목(Title) */}
        <Text typography="label-tight" className="text-neutral-900">
          생년월일
        </Text>

        {/* Input Field 인풋 */}
        <View className="gap-1">
          <View className="flex-row items-center gap-4">
            <View
              className={clsx(
                "flex flex-1 flex-row items-center border-b",
                state === "default" && "border-neutral-700",
                state === "focus" && "border-blue-300",
              )}
            >
              <View className="py-2">
                <Text typography="placeholder-default" className={clsx(value instanceof Date ? "text-neutral-1000" : "text-neutral-800")}>
                  {value instanceof Date
                    ? `${value.getFullYear()}.${(value.getMonth() + 1).toString().padStart(2, "0")}.${value.getDate().toString().padStart(2, "0")}`
                    : "2000.01.01"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
