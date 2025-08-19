import { SearchInput, type SearchInputProps, UnderlineInput, type UnderlineInputProps } from "./variant";

// 1. Input Props는 크게 두 가지의 속성을 전달받아야 됨
// 1-1. variant: Input의 타입을 결정하는 값
// 1-2. ...rest: 각 컴포넌트에 필수적으로 요구하는 Props 속성 값
// { variant: Varaint } & UnderlineInputProps or { variant: Varaint } & SearchInputProps
type Props = ({ variant: "underline" } & UnderlineInputProps) | ({ variant: "search" } & SearchInputProps);

/**
 * Atom / Input
 *
 * variant 값에 따라 서로 다른 Input 컴포넌트를 렌더링하는 진입점 컴포넌트입니다.
 *
 * @param props.variant  렌더링할 Input의 종류 ("underline" | "search")
 * @param props.rest     각 variant에 따라 요구되는 Input Props
 *
 * @example
 * // 밑줄 스타일 Input
 * <Input
 *   variant="underline"
 *   state="default"
 *   value={value}
 *   placeholder="비밀번호"
 *   onChangeText={setValue}
 *   onClear={() => setValue("")}
 * />
 *
 * // 검색 스타일 Input
 * <Input
 *   variant="search"
 *   value={keyword}
 *   placeholder="검색어를 입력하세요"
 *   onChangeText={setKeyword}
 *   onPress={() => setKeyword("")}
 * />
 *
 * @returns ReactElement 선택된 variant에 해당하는 Input 컴포넌트
 */
export default function Input({ variant, ...rest }: Props) {
  switch (variant) {
    case "underline":
      return <UnderlineInput {...(rest as UnderlineInputProps)} />;
    case "search":
      return <SearchInput {...(rest as SearchInputProps)} />;
  }
}
