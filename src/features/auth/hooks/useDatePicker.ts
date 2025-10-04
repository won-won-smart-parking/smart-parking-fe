import { useState } from "react";
import { Control, useController } from "react-hook-form";
import { SignUpFormValues } from "@/process/signup";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export default function useDatePicker(control: Control<SignUpFormValues>) {
  const [isShow, setIsShow] = useState<boolean>(false); // Date Picker 보여짐 여부 제어
  const [state, setState] = useState<"default" | "focus">("default");

  const {
    field: { onChange },
  } = useController<SignUpFormValues>({ name: "validation.birthday", control });

  // iOS DatePicker 관련 이벤트 핸들러
  const handleIOSConfirmPress = (selectedDate: Date) => {
    if (selectedDate) {
      onChange(selectedDate);
    }

    setIsShow(false);
    setState("default");
  };

  const handleIOSCancelPress = () => {
    setIsShow(false);
    setState("default");
  };

  // Android DatePicker 관련 이벤트 핸들러
  const handleAndroidChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      onChange(selectedDate);
    }

    setIsShow(false);
    setState("default");
  };

  return { isShow, state, setState, setIsShow, handleIOSConfirmPress, handleIOSCancelPress, handleAndroidChangeDate };
}
