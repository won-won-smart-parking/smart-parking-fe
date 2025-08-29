import { Input } from "@shared/ui/atoms";
import { UnderlineInputProps } from "@shared/ui/atoms/input/variant";

export default function TextInput(props: UnderlineInputProps) {
  return <Input variant="underline" {...props} />;
}
