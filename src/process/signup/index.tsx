import { FormProvider, useForm } from "react-hook-form";
import SignUpAccount from "@features/auth/SignUpForm/SignUpAccount";
import SignUpComplete from "@features/auth/SignUpForm/SignUpComplete";
import SignUpVerification from "@features/auth/SignUpForm/SignUpVerification";

export default function SignUpForm() {
  const method = useForm();

  return (
    <FormProvider {...method}>
      <SignUpAccount />
      <SignUpVerification />
      <SignUpComplete />
    </FormProvider>
  );
}
