import { Text } from "@shared/ui/atoms";

interface TicketTextProps {
  typography: "label-lg" | "caption-tight" | "caption-xxl";
  text: string;
  className?: string;
}

export default function TicketText({ typography, text, className }: TicketTextProps) {
  return (
    <Text typography={typography} className={className}>
      {text}
    </Text>
  );
}
