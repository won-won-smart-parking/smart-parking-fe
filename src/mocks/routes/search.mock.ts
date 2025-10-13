import { Server } from "miragejs";

export function searchMockRoutes(server: Server) {
  server.get("/api/search", () => {
    return {
      results: [
        { id: "1", title: "강남역 주차장", description: "서울 강남구 강남대로 100" },
        { id: "2", title: "역삼동 타워주차장", description: "서울 강남구 역삼로 50" },
        { id: "3", title: "삼성역 공영주차장", description: "서울 강남구 삼성로 30" },
        { id: "4", title: "논현동 파킹존", description: "서울 강남구 논현로 123" },
        { id: "5", title: "청담동 주차장", description: "서울 강남구 청담동 45-7" },
      ],
    };
  });
}
