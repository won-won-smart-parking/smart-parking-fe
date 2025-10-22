import { Server } from "miragejs";

export function searchMockRoutes(server: Server) {
  server.get("/api/search", (schema, request) => {
    const searchParam = request.queryParams.search;

    // 타입 string | string[] | undefined | null
    // 배열인 경우 첫 번째 값 사용
    const searchValue = Array.isArray(searchParam) ? searchParam[0] : searchParam;
    const lowerQuery = searchValue?.toLowerCase() || "";

    // Mirage DB에서 parking 모델 조회
    const results = lowerQuery
      ? schema.db.parkings.filter(
          (item: { id: string; title: string; description?: string }) =>
            item.title.toLowerCase().includes(lowerQuery) || item.description?.toLowerCase().includes(lowerQuery),
        )
      : schema.db.parkings;

    return { results };
  });
}
