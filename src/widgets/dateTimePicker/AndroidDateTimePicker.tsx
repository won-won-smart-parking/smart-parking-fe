import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export interface Props {
  value: Date;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
}

// 안드로이드 환경 DateTimePicker 구성
// pritter-ignore
export default function AndroidDateTimePicker({ value, onChange }: Props) {
  return (
    <DateTimePicker
      value={value}
      mode="date"
      display="spinner"
      maximumDate={new Date()} // 애플리케이션 실행 날짜를 최대값으로 지정하여 이 이후의 값은 선택 못하게 구성한다.
      onChange={onChange}
    />
  );
}
