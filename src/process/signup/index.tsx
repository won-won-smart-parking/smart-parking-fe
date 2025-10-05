import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import SignUpAccount from "@features/auth/SignUpForm/SignUpAccount";
import SignUpComplete from "@features/auth/SignUpForm/SignUpComplete";
import SignUpVerification from "@features/auth/SignUpForm/SignUpVerification";
import StepPagerView from "./foundation/StepPagerView";
import ContinueButton from "./part/ContinueButton";
import PreviousButton from "./part/PreviousButton";
import StepProgress from "./part/progress";
import SubmitButton from "./part/SubmitButton";
import useFormStep from "./useFormStep";

export type SignUpFormValues = {
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
};

export default function SignUpForm() {
  const { step, handleNextStep, handlePrevStep } = useFormStep();

  const method = useForm<SignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      account: {
        email: "",
        password: "",
        passwordConfirm: "",
        agreeLocation: false,
        agreePushNotice: false,
      },
      validation: {
        profile: undefined,
        name: "",
        birthday: "",
      },
    },
  });

  return (
    <FormProvider {...method}>
      <View className="flex-1 gap-10">
        <StepProgress steps={[{ label: "회원가입" }, { label: "개인 정보 입력" }, { label: "정보 확인" }]} currentStep={step} />

        {/* 회원가입 각 단계의 폼 구조를 보여주는 레이아웃 */}
        <View className="flex-1 justify-between">
          <StepPagerView step={step}>
            <SignUpAccount />
            <SignUpVerification />
            <SignUpComplete />
          </StepPagerView>

          {/* 각 스텝에 해당하는 버튼구성 레이아웃 */}
          <View className="gap-3">
            {step < 3 ? <ContinueButton step={step} onPress={handleNextStep} /> : <SubmitButton />}
            {step > 1 && <PreviousButton onPress={handlePrevStep} />}
          </View>
        </View>
      </View>
    </FormProvider>
  );
}
