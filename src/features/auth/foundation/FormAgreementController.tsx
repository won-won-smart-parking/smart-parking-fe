import { Control, FieldPath, FieldValues, RegisterOptions, useController } from "react-hook-form";
import AgreementItem, { Props as AgreementItemProps } from "@shared/ui/molecules/agreement-item";

export interface Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends Omit<AgreementItemProps, "selected" | "onPress"> {
  control: {
    name: TName;
    control: Control<TFieldValues>;
  };
  rules: RegisterOptions<TFieldValues, TName>;
}

/**
 * FormAgreementController
 * - 각 동의 항목 입력 필드의 기반을 담당하는 컴포넌트 역할을 수행한다.
 * - 상위 FormProvider와 연결되어 React Hook Form의 제어 하에 value를 관리한다.
 */
export default function FormAgreementController<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  description,
  control,
  rules,
}: Props<TFieldValues, TName>) {
  const {
    field: { value: isSelected, onChange },
  } = useController({ ...control, rules });
  // 1. control 객체를 통해 React Hook Form 연결
  // 2. name 속성을 통해 가장 상위의 React Hook Form의 입력 필드 연결

  // UI만 구성한 AgreementItem을 재사용함과 동시에 React Hook Form을 통해서 관리한다.
  // 동의 항목의 선택 유무는 RHF의 value를 통해서 제어되며, 이벤트 발생은 controller의 field의 onChange 이벤트를 통해 현재 입력 필드의 값을 전달한다.
  // prettier-ignore
  return (
    <AgreementItem
      description={description}
      selected={isSelected}
      onPress={() => onChange(!isSelected)}
    />
  );
}
