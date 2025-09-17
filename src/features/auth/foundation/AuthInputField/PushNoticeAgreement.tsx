import { SignUpFormValues } from "@/process/signup";
import FormAgreementController, { Props as FormAgreementControlerProps } from "../FormAgreementController";

type Props = Pick<FormAgreementControlerProps<SignUpFormValues, "account.agreePushNotice">, "control">;

// 앱 푸시 알림 수신 동의 유무 관리 컴포넌트
export default function PushNoticeAgreement({ control }: Props) {
  return (
    <FormAgreementController<SignUpFormValues, "account.agreePushNotice">
      control={control}
      description="마케팅 정보 앱 푸시 알림 수신 동의 (선택) >"
    />
  );
}
