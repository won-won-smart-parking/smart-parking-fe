import { useState } from "react";
import { createRecentSearchStorage, MAX_RECENT_SEARCHES } from "@global/utils/mmkv";
import FocusedSearchContainer from "./type/focused";
import MainSearchContainer from "./type/main";
import ResultSearchContainer from "./type/result";

export type SearchContainerVariant = "main" | "focused" | "result";

export default function SearchContainer() {
  const [query, setQuery] = useState(""); // 검색어
  const [selectedValue, setSelectedValue] = useState(""); // 선택된 값
  const [type, setType] = useState<SearchContainerVariant>("main"); // 현재 컴포넌트 상태
  const [filteredData, setFilteredData] = useState<{ id: string; title: string; description?: string }[]>([]);
  const recentSearch = createRecentSearchStorage("guest");
  const [recentSearches, setRecentSearches] = useState(recentSearch.getRecentSearches());

  // 직접 검색어 입력 -> 결과 페이지 이동
  const handleSearch = (searchQuery: string, filtered?: typeof filteredData) => {
    setQuery(searchQuery);

    if (filtered && filtered.length > 0) {
      // 엔터 입력 시 전체 필터링 결과 전달
      setFilteredData(filtered);
      setSelectedValue("");
    } else {
      // 리스트 선택 시 단일 값 전달
      setSelectedValue(searchQuery);
      setFilteredData([]);
    }

    recentSearch.setRecentSearch(searchQuery);
    setRecentSearches(recentSearch.getRecentSearches());
    setType("result");
  };

  // 리스트 선택
  const handleSelect = (value: string) => {
    handleSearch(value);
  };

  // 최근 검색어 삭제
  const handleDeleteRecentSearch = (value: string) => {
    recentSearch.deleteRecentSearch(value);
    setRecentSearches(recentSearch.getRecentSearches());
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
    setFilteredData([]);
  };

  switch (type) {
    case "main":
      return <MainSearchContainer onFocus={handleNavigate} />;

    case "focused":
      return (
        <FocusedSearchContainer
          value={query}
          onChangeText={setQuery}
          onSubmit={(searchQuery, filtered) => handleSearch(searchQuery, filtered)} // 필터링 데이터 전달
          onBack={handleNavigate}
          onSelect={handleSelect}
          onClear={handleClear}
          recentSearches={recentSearches.slice(0, MAX_RECENT_SEARCHES)}
          onDeleteRecentSearch={handleDeleteRecentSearch}
        />
      );

    case "result":
      return (
        <ResultSearchContainer
          value={query}
          selectedValue={selectedValue}
          filteredData={filteredData} // 엔터 시 전체 필터링 데이터 전달
          onChangeText={setQuery}
          onResultPress={handleNavigate}
          onSelectItem={handleSelect} // 결과 클릭 시 선택 처리
        />
      );
    default:
      return null;
  }
}
