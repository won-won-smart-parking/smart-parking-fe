import { useReducer } from "react";
import { Action, FormField, LoginFormType } from "./loginFormType";

// 상태 객체 내부 업데이트 로직
function patchField(state: LoginFormType, name: keyof LoginFormType, patch: Partial<FormField>) {
  return { ...state, [name]: { ...state[name], ...patch } };
}

// Login Form의 상태 업데이트 로직을 관리하는 리듀서 함수
function reducer(state: LoginFormType, action: Action) {
  const { type, payload } = action;

  // action.type에 맞는 상태 업데이트 로직을 수행한다.
  switch (type) {
    case "CHANG_VALUE": {
      return patchField(state, payload.name, { value: payload.text });
    }
    case "CLEAR": {
      return patchField(state, payload.name, { value: "" });
    }
    case "FOCUS": {
      return patchField(state, payload.name, { inputState: "focus" });
    }
    case "BLUR": {
      return patchField(state, payload.name, { inputState: "default" });
    }
  }
}

// useReducer 두 번째 인수로 들어가는 초기 상태 값
const initState: LoginFormType = {
  id: { value: "", inputState: "default" },
  password: { value: "", inputState: "default" },
};

// 로그인 폼에서 사용될 사용자 정의 훅(Custom Hook)
export default function useLoginForm() {
  const [state, dispatch] = useReducer(reducer, initState); // useState로 각 상태 업데이트 로직을 관리하는 것보다 useReducer 방식이 훨씬 가독성이 높다.

  // InputField 컴포넌트에 전달할 이벤트 핸들러
  const handleChangeValue = (text: string, name: keyof LoginFormType) => dispatch({ type: "CHANG_VALUE", payload: { name, text } });
  const handleClearPress = (name: keyof LoginFormType) => dispatch({ type: "CLEAR", payload: { name } });
  const handleFocus = (name: keyof LoginFormType) => dispatch({ type: "FOCUS", payload: { name } });
  const handleBlur = (name: keyof LoginFormType) => dispatch({ type: "BLUR", payload: { name } });

  return { state, handleChangeValue, handleClearPress, handleFocus, handleBlur };
}
