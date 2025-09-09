import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "@shared/ui/atoms";
import { LoginFormType } from "./loginFormType";
import useLoginForm from "./useLoginForm";
import FormInputField from "../foundation/FormInputField";
import FormSubmitButton from "../foundation/FormSubmitButton";

const LoginFormInputFieldDatas: { name: keyof LoginFormType; title: string; placeholder: string }[] = [
  { name: "id", title: "이메일", placeholder: "이메일을 입력해주세요..." },
  { name: "password", title: "비밀번호", placeholder: "비밀번호를 입력해주세요..." },
];

export default function LoginForm() {
  // const { state, refs, handleSubmit, ...handler } = useLoginForm();
  const { loginInputState, refs, ...handler } = useLoginForm(); // 로그인 폼에서 사용될 커스텀 훅(Custom Hook)

  return (
    <View className="gap-5">
      <View className="gap-4">
        {LoginFormInputFieldDatas.map(({ name, title, placeholder }, idx) => (
          <FormInputField
            key={idx}
            title={title}
            input={{
              placeholder,
              value: loginInputState[name].value,
              state: loginInputState[name].inputState,
              ref: refs.current[name],
              onChangeText: (text) => handler.handleChangeValue(text, name),
              onClearPress: () => handler.handleClearPress(name),
              onFocus: () => handler.handleFocus(name, loginInputState[name].inputState),
              onBlur: () => handler.handleBlur(name),
              icon: loginInputState[name].icon && {
                ...loginInputState[name].icon,
                onPress: () => handler.handleRevealToggle(name),
              },
              secureTextEntry: name === "password" && !loginInputState[name].icon?.revealed,
            }}
            message={loginInputState[name].message}
            button={loginInputState[name].button}
          />
        ))}

        {/* {LoginFormInputFieldDatas.map(({ name, label, placeholder }, idx) => (
          // 키의 값으로 index를 사용하는 것을 추천하지 않지만, 그럼에도 사용한 이유
          // - 리렌더링이 발생하면 가상 DOM 재조정 과정에서 이전 가상 DOM과 새로운 가상 DOM을 비교(Diffing)를 하여 차이를 찾아내고 실제 DOM에 반영한다. (모바일 기준이라 조금 다를 수도 있음)
          // - 이 재조정 과정에서 비교 알고리즘은 루트 노드부터 순서대로 재귀적으로 순회하며 비교하게 된다.
          // - 하지만, 이 과정에서 가상 DOM을 구축하는 요소의 순서를 키를 기준으로 먼저 확인을 하게 되는데, 키가 없을 경우에는 인덱스를 기준으로 비교한다.
          // - 즉, 인덱스를 기준으로 하기 때문에 순서만 바뀐 하위 트리의 구성도 각 요소의 인덱스가 달라졌기 때문에 모든 하위 트리를 철회하고 새로운 하위 트리를 만들어서 반영하게 된다.
          // - 하지만, 현재 구조에서는 정적인 데이터, 즉 순서가 바뀌꺼나, 요소의 추가 및 삭제가 발생되지 않기 때문에 인덱스를 기준으로 해도 하위 트리의 구성이 철회될 일이 없다.
          // - 근데, 내부적으로 인덱스를 기준으로 비교를 하는데도 불구하고 인덱스를 키 값으로 사용한 이유는 개발자 도구의 경고(Waring)을 없애기 위함이다.
          <FormInputField
            key={idx}
            name={name}
            label={label}
            placeholder={placeholder}
            state={state}
            {...{ ...handler, ref: refs.current[name] }}
          />
        ))} */}
      </View>

      {/* smartparking://auth/reset-password 라우트로 이동 네비게이션 구조 */}
      <View className="items-end">
        <Link href="/auth/reset-password">
          <Text typography="caption-sm" className="text-blue-400">
            비밀번호 찾기
          </Text>
        </Link>
      </View>

      <FormSubmitButton
        label="로그인"
        disabled={!(loginInputState["id"].value !== "" && loginInputState["password"].value !== "")}
        onPress={handler.handleSubmit}
      />
    </View>
  );
}
