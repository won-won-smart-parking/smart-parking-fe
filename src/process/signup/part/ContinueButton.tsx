import { Button } from "@shared/ui/atoms";

export default function ContinueButton({ onPress }: { onPress: () => void }) {
  return <Button variant="label" label="계속하기" onPress={onPress} />;
}
