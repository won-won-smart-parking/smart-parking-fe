import { Button } from "@shared/ui/atoms";
import { type IconName } from "@shared/ui/atoms/icon/variant";
import { actionBtnStyle } from "../foundation";

interface Props {
  iconName: IconName;
  label: string;
}

// 주차장 카드의 액션 버튼("경로", "전화", "공유", "저장")은
// iconName, label, state, onPress 이외에 추가적인 차이가 없으므로
// 공통 컴포넌트로 추상화하여 구성했습니다.
export default function ParkingCardActionButton({ iconName, label, ...rest }: Props) {
  const { container, palette } = actionBtnStyle; // 버튼 공통 스타일

  return (
    <Button
      variant="both"
      iconName={iconName}
      label={label}
      overrideButtonContainerStyles={container}
      palette={palette}
      roundedFull
      iconSize="w-4"
      typography="description-md"
      disablePressedEffect
      {...rest}
    />
  );
}
