import FocusedSearchContainer from "./type/focused";
import MainSearchContainer from "./type/main";
import ResultSearchContainer from "./type/result";

export type SearchContainerVariant = "main" | "focused" | "result";

interface Props {
  type: SearchContainerVariant;
}

/**
 * Organism / SearchContainer
 *
 * @example
 * // 1) 메인 화면에서 기본 검색창
 * <SearchContainer type="main" />
 *
 * // 2) 검색창 포커스 시
 * <SearchContainer type="focused" />
 *
 * // 3) 검색 결과 페이지에서
 * <SearchContainer type="result" />
 */

export default function SearchContainer({ type }: Props) {
  switch (type) {
    case "focused":
      return <FocusedSearchContainer />;
    case "result":
      return <ResultSearchContainer />;
    case "main":
    default:
      return <MainSearchContainer />;
  }
}
