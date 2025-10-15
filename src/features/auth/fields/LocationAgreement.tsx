import type { SignUpFormValues } from "@/process/signup/index.type";
import { FormAgreementController, type FormAgreementControllerProps } from "../controllers";

type Props = Pick<FormAgreementControllerProps<SignUpFormValues, "account.agreeLocation">, "control">;

// 위치 기반 서비스 약관 동의 입력 필드 관리 컴포넌트
export default function LocationAgreement({ control }: Props) {
  return (
    <FormAgreementController<SignUpFormValues, "account.agreeLocation">
      control={control}
      rules={{ required: true }}
      description="위치 기반 서비스 약관 동의 (필수) >"
    />
  );
}
