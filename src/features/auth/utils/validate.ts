import { LoginFormType } from "../LoginForm/loginFormType";

const emailRegExp = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", "i"); // 이메일 정규 표현식 객체
const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$"); // 이메일 정규 표현식 객체

// 로그인 입력 폼 제출 입력값 검증 로직
export function validateLoginFormField(name: keyof LoginFormType, value: string): string {
  if (value === "") return "필수 입력 항목입니다.";
  else if (name === "id" && !emailRegExp.test(value)) return "올바른 이메일 형식이 아닙니다.";
  else if (name === "password") {
    if (value.length < 8) return "비밀번호 길이는 최소 8자 이상입니다.";
    else if (!passwordRegExp.test(value)) return "올바른 비밀번호 형식이 아닙니다.";
  }

  return "";
}

// 디버깅을 위한 임시 데이터
debugger;
const debugArray: { name: keyof LoginFormType; value: string }[] = [
  { name: "id", value: "" },
  { name: "id", value: "sadsad!dasdda.com" },
  { name: "id", value: "test123@naver.com" },
  { name: "password", value: "asd124512fx!" },
  { name: "password", value: "Asad24123@sd12$" },
];

for (const { name, value } of debugArray) {
  console.log(validateLoginFormField(name, value));
}
