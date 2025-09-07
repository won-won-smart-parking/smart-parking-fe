import { InputState } from "@shared/ui/atoms/input/foundation";

type LoginFieldName = "id" | "password"; // 로그인 폼에서 사용되는 필드 키 이름

// 단일 인풋 필드의 상태 구조
export interface FormField {
  value: string;
  inputState: InputState;
}

// 로그인 폼 전체 상태 구조
export type LoginFormType = {
  [key in LoginFieldName]: FormField;
};

// 리듀서 함수에 전달되는 Action 객체의 타입 구성
type ActionMap = {
  CHANG_VALUE: { name: LoginFieldName; text: string };
  CLEAR: { name: LoginFieldName };
  FOCUS: { name: LoginFieldName };
  BLUR: { name: LoginFieldName };
};

export type Action = { [K in keyof ActionMap]: { type: K; payload: ActionMap[K] } }[keyof ActionMap];
