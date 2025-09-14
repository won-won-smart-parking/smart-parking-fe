import { AtomTextProps, Text } from "@shared/ui/atoms";

interface Props extends AtomTextProps {
  label: string;
}

export default function SideMenuText({ label, ...textProps }: Props) {
  return <Text {...textProps}>{label}</Text>;
}
