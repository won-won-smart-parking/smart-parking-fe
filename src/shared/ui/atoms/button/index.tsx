import {
  BothButton,
  type BothButtonProps,
  IconButton,
  type IconButtonProps,
  LabelButton,
  type LabelButtonProps,
} from "./variant";

type Props =
  | ({ variant: "both" } & BothButtonProps)
  | ({ variant: "icon" } & IconButtonProps)
  | ({ variant: "label" } & LabelButtonProps);

/**
 * Atom / Button
 *
 * variant 값에 따라 서로 다른 Button 컴포넌트를 렌더링하는 진입점 컴포넌트입니다.
 *
 * @param props.variant  렌더링할 Button의 종류 ("label" | "icon" | "both")
 * @param props.rest     각 variant에 따라 요구되는 Button Props
 *
 * @example
 * // Label-only Button Component
 * <Button
 *   variant="label"
 *   border
 *   overrideButtonContainerStyles="px-12 py-6"
 *   label="Click me!!"
 *   palette={{ textColor: "text-blue-100", textPressedColor: "text-blue-300" }}
 *   onPress={onPress}
 * />
 *
 * // Icon-only Button Component
 * <Button
 *   variant="icon"
 *   roundedFull
 *   iconName={"arrowLeft"}
 *   iconSize="w-12"
 *   overrideButtonContainerStyles="aspect-square"
 *   palette={{ iconColor: "text-red-100", iconPressedColor: "text-red-300" }}
 *   onPress={onPress}
 * />
 *
 * // Both Button Component
 * <Button
 *   variant="both"
 *   roundedFull
 *   label="Click me!!"
 *   iconName={"arrowLeft"}
 *   iconSize="w-12"
 *   palette={
 *      {
 *        textColor: "text-blue-100",
 *        textPressedColor: "text-blue-300",
 *        iconColor: "text-red-100",
 *        iconPressedColor: "text-red-300"
 *      }
 *   }
 *   onPress={onPress}
 * />
 *
 * @returns ReactElement 선택된 variant에 해당하는 Button 컴포넌트
 */
export default function Button({ variant, ...rest }: Props) {
  switch (variant) {
    case "label":
      return <LabelButton {...(rest as LabelButtonProps)} />;
    case "icon":
      return <IconButton {...(rest as IconButtonProps)} />;
    case "both":
      return <BothButton {...(rest as BothButtonProps)} />;
  }
}
