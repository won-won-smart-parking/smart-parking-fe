import { View } from "react-native";
import { Input } from "@shared/ui/atoms";
import type { IconButtonProps } from "@shared/ui/atoms/button/variant";
import type { SearchInputProps } from "@shared/ui/atoms/input/variant";
import SearchFieldButton from "./part/SearchFieldButton";

interface Props {
  leftIcon: IconButtonProps;
  rightIcon: IconButtonProps;
  input: SearchInputProps & { autoFocus?: boolean };
}

/**
 * Molecular / Search Field
 *
 * 메인 페이지, 검색 페이지에서 공통으로 사용하는 검색 필드 UI 컴포넌트입니다.
 * 비즈니스 로직은 포함하지 않으며, 상위 컴포넌트에서 필요한 로직과 상태를 주입하여 확장합니다.
 */
export default function SearchField({ leftIcon, rightIcon, input }: Props) {
  return (
    <View className="flex-row items-center justify-between gap-2">
      <SearchFieldButton {...leftIcon} />
      <Input variant="search" {...input} />
      <SearchFieldButton {...rightIcon} />
    </View>
  );
}
