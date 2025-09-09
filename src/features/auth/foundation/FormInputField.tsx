// import { InputState } from "@shared/ui/atoms/input/foundation";
import InputField, { Props as InputFieldProps } from "@shared/ui/molecules/input-field";

// import { LoginFormType } from "../LoginForm/loginFormType";
/*
  InputFieldProps
  - InputField - Props 구성
      - title: 인풋의 제목
      - input: {
          **Underline - Props 구성**
          - InputRequiredProps
            - value
            - placeholder
            - onChangeText
            - onClearPress: () => void: 인풋 내용 전체 삭제 속성
          
          - state: InputState("default" | "focus" | "error" | "disabled")
          
          - icon?:
            - revealed: 아이콘 hidden, visiable 상태 여부
            - hidden: 숨겨진 상태에서의 아이콘 이름
            - visiable:: 보여짐 상태에서의 아이콘 이름
            - onPress: 아이콘 클릭 시 변경 상태

          - ...Text Input Props
      }
      - message?: HelperText
      - button?: {
        - label -> 버튼의 텍스트 내용
        - onPress -> 버튼 클릭 시 발생하는 press 이벤트 핸들러
        - disabled -> 버튼 비활성화 여부	
      }
*/

export default function FormInputField({ title, input, message, button }: InputFieldProps) {
  return <InputField title={title} input={input} message={message} button={button} />;
}

// export default function FormInputField({ name, title, input, message, button }: TestProps) {
//   return (
//     <InputField
//       title={title}
//       input={{
//         ...input,
//         value: input.value,
//         placeholder: input.placeholder,
//         ref: input.ref,
//         onChangeText: (text) => handleChangeValue(text, name),
//         onClearPress: () => handleClearPress(name),
//         onFocus: () => handleFocus(name, state[name].inputState),
//         onBlur: () => handleBlur(name),
//       }}
//       message={message}
//       button={button}
//     />
//   );
// }

// interface Props {
//   name: keyof LoginFormType;
//   label: string;
//   state: LoginFormType;
//   placeholder: string;
//   handleChangeValue: (text: string, name: keyof LoginFormType) => void;
//   handleClearPress: (name: keyof LoginFormType) => void;
//   handleFocus: (name: keyof LoginFormType, inputState: InputState) => void;
//   handleBlur: (name: keyof LoginFormType) => void;
// }

// export default function FormInputField({
//   name,
//   label,
//   state,
//   placeholder,
//   handleChangeValue,
//   handleClearPress,
//   handleFocus,
//   handleBlur,
//   ...rest
// }: Props) {
//   return (
//     <InputField
//       title={label}
//       input={{
//         placeholder,
//         value: state[name].value,
//         state: state[name].inputState,
//         onChangeText: (text) => handleChangeValue(text, name),
//         onPress: () => handleClearPress(name),
//         onFocus: () => handleFocus(name, state[name].inputState),
//         onBlur: () => handleBlur(name),
//         ...rest,
//       }}
//     />
//   );
// }
