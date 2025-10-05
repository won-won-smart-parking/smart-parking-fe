import React from "react";
import { useFormContext } from "react-hook-form";
import { Platform, View } from "react-native";
import { SignUpFormValues } from "@/process/signup";
import { AndroidDateTimePicker, IOSDateTimePicker } from "@widgets/dateTimePicker";
import { NameInputField } from "../foundation";
import DateInputField from "../foundation/AuthInputField/DateInputField";
import ProfileInputField from "../foundation/AuthInputField/ProfileInputField";
import useDatePicker from "../hooks/useDatePicker";

// 개인 정보 입력(이미지, 이름, 생년월일)을 나타내는 컴포넌트
export default function SignUpVerification() {
  const { control, getValues } = useFormContext<SignUpFormValues>(); // 상위 RHF 제공자(Provider) 구독

  // DatePicker Show와 관련된 React Hooks
  const { isShow, state, setState, setIsShow, handleIOSConfirmPress, handleIOSCancelPress, handleAndroidChangeDate } =
    useDatePicker(control);

  return (
    <>
      <View className="items-center gap-4">
        <ProfileInputField control={{ name: "validation.profile", control }} />
        <NameInputField control={{ name: "validation.name", control }} />
        <DateInputField control={{ name: "validation.birthday", control }} state={state} setState={setState} setIsShow={setIsShow} />
      </View>

      {/* 날짜 입력 필드로 인한 DatePicker - Portal 컴포넌트와 비슷한 역할을 하기 때문에 관리를 용이하기 위해 개인정보 입력 컴포넌트 하위에 배치한다. */}
      {Platform.OS === "ios" && (
        <IOSDateTimePicker
          show={isShow}
          value={getValues("validation.birthday") || new Date()}
          onConfirm={handleIOSConfirmPress}
          onCancel={handleIOSCancelPress}
        />
      )}
      {Platform.OS === "android" && isShow && (
        <AndroidDateTimePicker value={getValues("validation.birthday") || new Date()} onChange={handleAndroidChangeDate} />
      )}
    </>
  );
}
