import { Button } from "@shared/ui/atoms";

// 회원가입 이전 스텝 이동 버튼 컴포넌트
export default function PreviousButton({ onPress }: { onPress: () => void }) {
  return (
    <Button
      variant="label"
      label="뒤로가기"
      onPress={onPress}
      palette={{
        bgColor: "bg-coolgray-100",
        bgPressedColor: "bg-coolgray-100",
        textColor: "text-neutral-900",
        textPressedColor: "text-neutral-700",
      }}
    />
  );
}
