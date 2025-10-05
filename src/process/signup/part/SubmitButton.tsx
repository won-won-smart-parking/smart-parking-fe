import { Button } from "@shared/ui/atoms";
import useFormSubmit from "../useFormSubmit";

export default function SubmitButton() {
  const { handleSubmit } = useFormSubmit();

  return <Button variant="label" label="로그인 화면으로 이동" onPress={handleSubmit} />;
}
