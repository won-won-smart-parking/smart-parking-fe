import { Text } from "@shared/ui/atoms";

interface Props {
  children: React.ReactNode;
}

export default function ParkingCardDescription({ children }: Props) {
  return (
    <Text typography="caption-md" className="text-neutral-900">
      {children}
    </Text>
  );
}
