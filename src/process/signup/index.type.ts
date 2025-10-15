export type Step = 1 | 2 | 3; // 회원가입 단계

// RHF 회원가입 폼 타입 구성
export interface SignUpFormValues {
  account: {
    email: string;
    password: string;
    passwordConfirm: string;
    agreeLocation: boolean;
    agreePushNotice?: boolean;
  };
  validation: {
    profile?: { imageUrl: string; imageName: string; imageType: string };
    name: string;
    birthday: Date | "";
  };
}
