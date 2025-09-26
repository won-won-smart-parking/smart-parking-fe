import { Button } from "@shared/ui/atoms";

export default function PreviousButton({ onPress }: { onPress: () => void }) {
  return <Button variant="label" label="뒤로가기" onPress={onPress} />;
}
