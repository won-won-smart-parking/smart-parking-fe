import { useState } from "react";
import { InputState } from "@shared/ui/atoms/input/foundation";

// 인덱스 시그니처를 활용한 인터페이스 타입 구성
interface LoginFormType {
  [key: string]: {
    name: string;
    value: string;
    inputState: InputState;
  };
}

export default function useLoginForm() {
  const [loginFormData, setLoginFormData] = useState<LoginFormType>({
    id: { name: "id", value: "", inputState: "default" },
    password: { name: "password", value: "", inputState: "default" },
  });

  // onChangeText 이벤트가 발생할 떄 변경되어야 하는 인풋 필드 값 변경 이벤트 핸들러
  const handleChangeValue = (text: string, name: keyof LoginFormType) => {
    setLoginFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: text,
      },
    }));
  };

  // onPress 이벤트가 발생할 떄 값이 초기화되어야 하는 이벤트 핸들러
  const handleClearPress = (name: keyof LoginFormType) => {
    setLoginFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: "",
      },
    }));
  };

  // 포커스 상태에 따른 이벤트 핸들러
  const handleFocus = (name: keyof LoginFormType) => {
    setLoginFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        inputState: "focus" as InputState,
      },
    }));
  };

  // 포커스를 잃었을 때 발생하는 이벤트 핸들러
  const handleBlur = (name: keyof LoginFormType) => {
    setLoginFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        inputState: "default" as InputState,
      },
    }));
  };

  return { loginFormData, handleChangeValue, handleClearPress, handleFocus, handleBlur };
}
