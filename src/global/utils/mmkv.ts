import { createMMKV } from "react-native-mmkv";

export const MAX_RECENT_SEARCHES = 3; // 화면에 보여줄 최대 검색어 개수

export const createRecentSearchStorage = (userId: string = "guest") => {
  // 유저별 MMKV 스토리지 생성
  const storage = createMMKV({
    id: `user-${userId}-storage`,
  });

  return {
    // 최근 검색어 가져오기 (빈 문자열 제거)
    getRecentSearches: (): string[] => {
      const searches = storage.getString("recentSearches");
      if (!searches) return [];
      return JSON.parse(searches).filter((item: string) => item.trim() !== "");
    },

    // 최근 검색어 추가 (빈 문자열 무시)
    setRecentSearch: (query: string) => {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) return; // 빈 값이면 저장하지 않음

      const existing: string[] = storage.getString("recentSearches") ? JSON.parse(storage.getString("recentSearches")!) : [];

      // 중복 제거, 최신순 정리
      const newSet = [query, ...existing.filter((item) => item !== query)];

      // MMKV에는 모든 검색어 저장
      storage.set("recentSearches", JSON.stringify(newSet));
    },

    // 최근 검색어 삭제
    deleteRecentSearch: (query: string) => {
      const existing: string[] = storage.getString("recentSearches") ? JSON.parse(storage.getString("recentSearches")!) : [];

      const updated = existing.filter((item) => item !== query);
      storage.set("recentSearches", JSON.stringify(updated));
    },
  };
};
