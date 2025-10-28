import clsx from "clsx";
import { View, ViewProps } from "react-native";

interface Props extends Required<Pick<ViewProps, "children">> {
  direction?: "column" | "row";
}

/**
 * Molecular / Button Group
 *
 * Button Group은 Atom 단위의 Button, Chip, SocialButton 등을 자식으로 받아 일관된 레이아웃을 제공하는 컨테이너 컴포넌트입니다.
 * 각 버튼 그룹 내부의 버튼은 종류, 개수, 스타일, 상태, 이벤트 핸들러 등이 상황에 따라 달라질 수 있으므로, ButtonGroup 자체에서는 이 로직을 포함하지 않습니다.
 * 따라서 순수하게 레이아웃 구조만 담당하는 스켈레톤 UI 컴포넌트로 사용됩니다.
 *
 * @example
 * // Social Button Group
 * <ButtonGroup>
 *    <SocialButton type="naver" onPress={onPress} />
 *    <SocialButton type="kakao" onPress={onPress} />
 *    <SocialButton type="facebook" onPress={onPress} />
 *    <SocialButton type="apple" onPress={onPress} />
 * </ButtonGroup>
 *
 * // Vertical Button Group
 * <ButtonGroup>
 *    <Button />
 *    <Button />
 * </ButtonGroup>
 *
 * // Horizontal Button Group
 * <ButtonGroup direction="column">
 *    <Button />
 *    <Button />
 * </ButtonGroup>
 *
 * @returns ReactElement ButtonGroup 컴포넌트
 */
export default function ButtonGroup({ direction = "row", children }: Props) {
  return <View className={clsx("justify-between", direction === "row" ? "flex-row" : "flex-col gap-3")}>{children}</View>;
}
