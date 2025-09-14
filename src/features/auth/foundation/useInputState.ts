import { useEffect, useReducer } from "react";
import { InputState } from "@shared/ui/atoms/input/foundation";

type ActionMap = {
  DEFAULT: null;
  FOCUS: { currentState: InputState };
  BLUR: { currentState: InputState };
  ERROR: null;
};

type Action = {
  [K in keyof ActionMap]: { type: K; payload: ActionMap[K] };
}[keyof ActionMap];

// State 업데이트 Reducer 함수
function reducer(state: InputState, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "DEFAULT": {
      return "default";
    }
    case "FOCUS": {
      return payload.currentState === "error" ? "error" : "focus";
    }
    case "BLUR": {
      return payload.currentState === "error" ? "error" : "focus";
    }
    case "ERROR": {
      return "error";
    }
    default: {
      return state;
    }
  }
}

// 각 입력 필드마다 독립적으로 UI 상태를 가지는 커스텀 훅(Custom Hook)
export default function useInputState(invalid: boolean) {
  const [state, dispatch] = useReducer(reducer, "default");

  const handleFocus = () => dispatch({ type: "FOCUS", payload: { currentState: state } });
  const handleBlur = () => dispatch({ type: "BLUR", payload: { currentState: state } });

  // 유효성 검사 여부에 따라 default <-> error 상태를 전환한다.
  useEffect(() => {
    if (invalid) dispatch({ type: "ERROR", payload: null });
    else {
      dispatch({ type: "DEFAULT", payload: null });
    }
  }, [invalid]);

  return { state, handleFocus, handleBlur };
}
