import type { SectionTitleProps } from ".";

export const sectionTitleConfig: { [pathname: string]: SectionTitleProps | ((step: number) => SectionTitleProps) } = {
  "/auth/sign-in": {
    title: "로그인을 해주세요.",
    label: "둘러보기",
  },
  "/auth/reset-password": {
    title: "인증 후 비밀번호 변경해주세요.",
    label: "취소",
  },
  "/auth/sign-up": (step) => {
    switch (step) {
      case 1: {
        return {
          title: "회원가입을 진행해주세요.",
          label: "취소",
        };
      }
      case 2: {
        return {
          title: "회원가입을 진행해주세요.",
          label: "취소",
        };
      }
      case 3: {
        return {
          title: "회원가입이 완료되었습니다.",
          label: "",
        };
      }
      default: {
        return {
          title: "회원가입",
          label: "취소",
        };
      }
    }
  },
};
