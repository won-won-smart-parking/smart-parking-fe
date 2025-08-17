import { SearchInput, type SearchInputProps, UnderlineInput, type UnderlineInputProps } from "./variant";

// 1. Input Props는 크게 두 가지의 속성을 전달받아야 됨
// 1-1. variant: Input의 타입을 결정하는 값
// 1-2. ...rest: 각 컴포넌트에 필수적으로 요구하는 Props 속성 값
// { variant: Varaint } & UnderlineInputProps or { variant: Varaint } & SearchInputProps
type Props = ({ variant: "underline" } & UnderlineInputProps) | ({ variant: "search" } & SearchInputProps);

export default function Input({ variant, ...rest }: Props) {
  switch (variant) {
    case "underline":
      return <UnderlineInput {...(rest as UnderlineInputProps)} />;
    case "search":
      return <SearchInput {...(rest as SearchInputProps)} />;
  }
}
