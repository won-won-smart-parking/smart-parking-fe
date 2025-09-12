import FocusedSearchContainer from "./type/focused";
import MainSearchContainer from "./type/main";
import ResultSearchContainer from "./type/result";

export type SearchContainerVariant = "main" | "focused" | "result";

interface Props {
  type: SearchContainerVariant;
}

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
