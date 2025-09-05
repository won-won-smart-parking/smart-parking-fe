import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Text } from "@shared/ui/atoms";
import { InputState } from "@shared/ui/atoms/input/foundation";

interface Props {
  message: string;
  state: InputState;
}

export default function HelperText({ message, state }: Props) {
  return (
    <Text typography="caption-tight" className={twMerge(clsx("text-neutral-900", state === "error" && "text-red-300"))}>
      {message}
    </Text>
  );
}
