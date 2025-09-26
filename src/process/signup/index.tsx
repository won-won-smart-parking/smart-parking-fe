import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import SignUpAccount from "@features/auth/SignUpForm/SignUpAccount";
import SignUpComplete from "@features/auth/SignUpForm/SignUpComplete";
import SignUpVerification from "@features/auth/SignUpForm/SignUpVerification";
import ContinueButton from "./part/ContinueButton";
import PreviousButton from "./part/PreviousButton";
import SubmitButton from "./part/SubmitButton";

export type SignUpFormValues = {
  account: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    agreeLocation: string;
    agreePushNotice: string;
  };
};

export default function SignUpForm() {
  const [step, setStep] = useState(1);

  const method = useForm<SignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      account: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        agreeLocation: "",
        agreePushNotice: "",
      },
    },
  });

  const handleNext = () => setStep(step + 1); // 예시
  const handlePrev = () => setStep(step - 1); // 예시

  return (
    <FormProvider {...method}>
      <View className="flex-1 justify-between">
        <View className="gap-6">
          {step === 1 && <SignUpAccount />}
          {step === 2 && <SignUpVerification />}
          {step === 3 && <SignUpComplete />}
        </View>

        {/* 각 스텝에 해당하는 버튼구성 레이아웃 */}
        <View className="gap-3">
          {step < 3 ? <ContinueButton onPress={handleNext} /> : <SubmitButton />}
          {step > 1 && <PreviousButton onPress={handlePrev} />}
        </View>
      </View>
    </FormProvider>
  );
}
