import { useState } from "react";
import FocusedSearchContainer from "./type/focused";
import MainSearchContainer from "./type/main";
import ResultSearchContainer from "./type/result";

export type SearchContainerVariant = "main" | "focused" | "result";

export default function SearchContainer() {
  const [query, setQuery] = useState(""); // 검색어
  const [selectedValue, setSelectedValue] = useState(""); // 선택된 값
  const [type, setType] = useState<SearchContainerVariant>("main"); // 현재 컴포넌트 상태

  // 직접 검색어 입력 -> 결과 페이지 이동
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setSelectedValue(searchQuery);
    setType("result");
  };

  // 리스트 검색 값 클릭 -> 결과 페이지 이동
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setType("result");
  };

  // 컴포넌트 상태에 따른 네비게이션 처리
  const handleNavigate = () => {
    setQuery("");
    setSelectedValue("");

    if (type === "main") {
      setType("focused"); // main -> focused
    } else if (type === "focused") {
      setType("main"); // focused -> main
    } else if (type === "result") {
      setType("focused"); // result -> focused
    }
  };

  // Clear 버튼 클릭 -> 검색어 및 선택값 초기화
  const handleClear = () => {
    setQuery("");
    setSelectedValue("");
  };

  switch (type) {
    case "main":
      return <MainSearchContainer onFocus={handleNavigate} />;

    case "focused":
      return (
        <FocusedSearchContainer
          value={query}
          onChangeText={setQuery}
          onSubmit={() => handleSearch(query)}
          onBack={handleNavigate}
          onSelect={handleSelect}
          onClear={handleClear}
        />
      );

    case "result":
      return (
        <ResultSearchContainer
          value={query}
          selectedValue={selectedValue}
          onChangeText={setQuery}
          onResultPress={handleNavigate}
        />
      );

    default:
      return null;
  }
}
