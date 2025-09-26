import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import SignUpAccount from "@features/auth/SignUpForm/SignUpAccount";
import SignUpComplete from "@features/auth/SignUpForm/SignUpComplete";
import SignUpVerification from "@features/auth/SignUpForm/SignUpVerification";

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

  useEffect(() => {
    if (step === 0) setStep(1);
  }, []);

  return (
    <FormProvider {...method}>
      <View>
        <View>
          {step === 1 && <SignUpAccount />}
          {step === 2 && <SignUpVerification />}
          {step === 3 && <SignUpComplete />}
        </View>
      </View>
    </FormProvider>
  );
}
