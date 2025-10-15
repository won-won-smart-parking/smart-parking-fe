import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { ContinueButton, PreviousButton, SubmitButton } from "@features/auth/buttons";
import { SignUpAccount, SignUpComplete, SignUpVerification } from "@features/auth/form/SignUpForm";
import useSignInFormContinue from "@features/auth/hooks/useSignInFormContinue";
import { StepPagerView, StepProgress } from "./foundation";
import { SignUpFormValues } from "./index.type";
import useSignUpFormSubmit from "./useSignUpFormSubmit";

export default function SignUpForm() {
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

  const { step, handleNextStep, handlePrevStep } = useSignInFormContinue();
  const { handleSubmit } = useSignUpFormSubmit(method.getValues);

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
            {step < 3 ? (
              <ContinueButton step={step} onPress={handleNextStep} />
            ) : (
              <SubmitButton label="로그인 화면으로 이동" onPress={handleSubmit} />
            )}
            {step > 1 && <PreviousButton onPress={handlePrevStep} />}
          </View>
        </View>
      </View>
    </FormProvider>
  );
}
