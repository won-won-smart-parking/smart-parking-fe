import React, { useReducer, useRef } from "react";
import { TextInput } from "react-native";
import { InputState } from "@shared/ui/atoms/input/foundation";
import { Action, FormField, LoginFormType } from "./loginFormType";
import { validateLoginFormField } from "../utils/validate";

// 상태 객체 내부 업데이트 로직
function patchField(state: LoginFormType, name: keyof LoginFormType, patch: Partial<FormField>) {
  return { ...state, [name]: { ...state[name], ...patch } };
}

// Login Form의 상태 업데이트 로직을 관리하는 리듀서 함수
function reducer(state: LoginFormType, action: Action) {
  const { type, payload } = action;

  // action.type에 맞는 상태 업데이트 로직을 수행한다.
  switch (type) {
    case "CHANGE_VALUE": {
      return patchField(state, payload.name, { value: payload.text });
    }
    case "CLEAR": {
      return patchField(state, payload.name, { value: "" });
    }
    case "FOCUS": {
      return patchField(state, payload.name, { inputState: payload.inputState !== "error" ? "focus" : "error" });
    }
    case "BLUR": {
      return patchField(state, payload.name, { inputState: "default" });
    }
    case "ERROR": {
      return patchField(state, payload.name, { inputState: "error", message: payload.message });
    }
    case "TOGGLE_REVEAL": {
      if (payload.name === "password" && state["password"].icon) {
        return patchField(state, "password", { icon: { ...state["password"].icon, revealed: !state["password"].icon.revealed } });
      }
      return state;
    }
    default: {
      return state;
    }
  }
}

// useReducer 두 번째 인수로 들어가는 초기 상태 값
const initState: LoginFormType = {
  id: { value: "", inputState: "default", message: "" },
  password: { value: "", inputState: "default", message: "", icon: { revealed: false, hidden: "eyeOffOutline", visible: "eyeOnOutline" } },
};

// message <- 인풋 필드가 무엇인지 도와주는 Helper Message
// button  <- 인풋 필드의 부가 효과가 부여하기 위한 버튼의 구성 (인증번호 전송, 핸드폰 번호 인증, ... 등)
// Login
// id        -> value, inputState
// password  -> value, inputState, icon

// 로그인 폼에서 사용될 사용자 정의 훅(Custom Hook)
export default function useLoginForm() {
  const [loginInputState, dispatch] = useReducer(reducer, initState); // useState로 각 상태 업데이트 로직을 관리하는 것보다 useReducer 관리 방식이 분기 처리가 하기가 더 낫다.

  const refs = useRef<Record<keyof LoginFormType, React.RefObject<TextInput | null>>>({
    id: { current: null },
    password: { current: null },
  });

  // InputField 컴포넌트에 전달할 이벤트 핸들러
  const handleChangeValue = (text: string, name: keyof LoginFormType) => dispatch({ type: "CHANGE_VALUE", payload: { name, text } });
  const handleClearPress = (name: keyof LoginFormType) => dispatch({ type: "CLEAR", payload: { name } });
  const handleFocus = (name: keyof LoginFormType, inputState: InputState) => dispatch({ type: "FOCUS", payload: { name, inputState } });
  const handleBlur = (name: keyof LoginFormType) => dispatch({ type: "BLUR", payload: { name } });
  const handleRevealToggle = (name: keyof LoginFormType) => dispatch({ type: "TOGGLE_REVEAL", payload: { name } });

  // Submit 이벤트 핸들러
  const handleSubmit = () => {
    const errors: [keyof LoginFormType, string][] = [];

    // 로그인 제출 버튼 클릭 시 발생한 에러 항목 누적
    (Object.keys(loginInputState) as (keyof LoginFormType)[]).forEach((key) => {
      const errorMsg = validateLoginFormField(key, loginInputState[key].value);

      // 단일 인풋 필드 검증 오류 메시지가 있을 경우 각 키를 누적한다.
      if (errorMsg) {
        errors.push([key, errorMsg]);
      }
    });

    // 발생한 잘못된 검증이 발생한 경우 각 인풋 필드를 에러 처리 및 포커싱을 수행한다.
    if (errors.length > 0) {
      const [firstError, _] = errors[0];
      if (refs.current[firstError].current) {
        refs.current[firstError].current.focus();
      }

      errors.forEach(([name, errorMsg]) => dispatch({ type: "ERROR", payload: { name, message: errorMsg } }));
      return; // 에러가 발생하면 제출 로직이 수행되면 안됨
    }

    /**
     * [ NOTE ]
     * - submit 이벤트 발생 후 모든 검증이 안정적으로 넘어가면 로그인 API 로직을 구성한다.
     */
  };

  return { loginInputState, refs, handleSubmit, handleChangeValue, handleClearPress, handleFocus, handleBlur, handleRevealToggle };
}
