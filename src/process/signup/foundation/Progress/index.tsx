import { View } from "react-native";
import { StepStatus } from "./StepCircle";
import StepItem, { Props as StepItemProps } from "./StepItem";
import { Step } from "../../index.type";

interface Props {
  steps: Omit<StepItemProps, "status" | "isFirst" | "isLast">[];
  currentStep: Step;
}

// 회원가입 모든 단계의 Progress를 담당하는 컴포넌트
export default function StepProgress({ steps, currentStep }: Props) {
  return (
    <View className="flex-row">
      {steps.map((step, idx) => {
        let status: StepStatus = "inactive"; // 초기 상태

        // 리렌더링 시 status를 재계산하여 각 stauts의 값을 재구성
        if (idx + 1 < currentStep) status = "completed";
        else if (idx + 1 === currentStep) {
          status = "active";
        }

        // prettier-ignore
        return (
          <StepItem
            key={step.label}
            status={status}
            label={step.label}
            isFirst={idx === 0}
            isLast={idx === steps.length - 1}
          />
        );
      })}
    </View>
  );
}
