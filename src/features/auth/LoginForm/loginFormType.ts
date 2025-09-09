import { IconName } from "@shared/ui/atoms/icon/variant";
import { InputState } from "@shared/ui/atoms/input/foundation";

type LoginFieldName = "id" | "password"; // 로그인 폼에서 사용되는 필드 키 이름

// 단일 인풋 필드의 상태 구조
export interface FormField {
  value: string;
  inputState: InputState;
  icon?: {
    revealed: boolean;
    hidden: IconName;
    visible: IconName;
  };
  message: string;
  button?: {
    label: string;
    onPress: () => void;
    disabled: boolean;
  };
}

/*
  InputFieldProps
  - InputField - Props 구성
      - input: {
          **Underline - Props 구성**
          - InputRequiredProps
            - value
          
            - state: InputState("default" | "focus" | "error" | "disabled")
          
          - icon?:
            - revealed: 아이콘 hidden, visiable 상태 여부
            - hidden: 숨겨진 상태에서의 아이콘 이름
            - visiable: 보여짐 상태에서의 아이콘 이름
            - onPress: 아이콘 클릭 시 변경 상태
      }
      - message?: HelperText
      - button?: {
        - label -> 버튼의 텍스트 내용
        - onPress -> 버튼 클릭 시 발생하는 press 이벤트 핸들러
        - disabled -> 버튼 비활성화 여부	
      }
*/

// 로그인 폼 전체 상태 구조
export type LoginFormType = {
  [key in LoginFieldName]: FormField;
};

// 리듀서 함수에 전달되는 Action 객체의 타입 구성
type ActionMap = {
  CHANGE_VALUE: { name: LoginFieldName; text: string };
  CLEAR: { name: LoginFieldName };
  FOCUS: { name: LoginFieldName; inputState: InputState };
  BLUR: { name: LoginFieldName };
  ERROR: { name: LoginFieldName; message: string };
  TOGGLE_REVEAL: { name: LoginFieldName };
};

export type Action = { [K in keyof ActionMap]: { type: K; payload: ActionMap[K] } }[keyof ActionMap];
