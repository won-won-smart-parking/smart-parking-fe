import { PressableProps } from "react-native";

// 버튼 컴포넌트 접근성 관련 util 코드
export type Category = "default" | "action";

// 버튼 접근성 객체 구조 타입 정의
interface Options {
  disabled: boolean;
  busy: boolean;
  label: string;
  hint: string;
  valueText: string;
}
type A11yOptions = Partial<Options>; // 접근성 옵션들은 기본적으로 선택적으로 적용한다.

// A11yProps 리턴 타입 구성
type A11yReturn = Pick<
  PressableProps,
  | "accessible"
  | "accessibilityRole"
  | "accessibilityLabel"
  | "accessibilityHint"
  | "accessibilityValue"
  | "accessibilityState"
>;

export function getA11yProps(category: Category, options: A11yOptions = {}): A11yReturn {
  const { disabled, busy, label, hint, valueText } = options;

  // 기본적으로 적용되어야 하는 접근성 규칙 적용
  const base: A11yReturn = {
    accessible: true,
    accessibilityRole: "button",
    ...(label ? { accessibilityLabel: label } : null),
    ...(hint ? { accessibilityHint: hint } : null),
    ...(valueText ? { accessibilityValue: { text: valueText } } : null),
  };

  // 버튼의 종류에 따라 다르게 적용되어야 하는 접근성 규칙 적용
  switch (category) {
    case "default":
      return {
        ...base,
        accessibilityState: {
          ...(disabled !== undefined ? { disabled } : null),
        },
      };
    case "action":
      return {
        ...base,
        accessibilityState: {
          ...(disabled !== undefined ? { disabled } : null),
          ...(busy !== undefined ? { busy } : null),
        },
      };
  }
}
