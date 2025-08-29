import { View } from "react-native";
import { Input } from "@shared/ui/atoms";
import type { IconButtonProps } from "@shared/ui/atoms/button/variant";
import type { SearchInputProps } from "@shared/ui/atoms/input/variant";
import SearchFieldButton from "./part/SearchFieldButton";

interface Props {
  leftIcon: IconButtonProps;
  rightIcon: IconButtonProps;
  input: SearchInputProps;
}

export default function SearchField({ leftIcon, rightIcon, input }: Props) {
  return (
    <View className="flex-row items-center justify-between gap-2">
      <SearchFieldButton {...leftIcon} />
      <Input variant="search" {...input} />
      <SearchFieldButton {...rightIcon} />
    </View>
  );
}
