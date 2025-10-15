import { createServer, Model } from "miragejs";
import userData from "./data/user.json";
import { userMockRoutes } from "./routes/user.mock";
import { searchMockRoutes } from "./routes/search.mock";

// MirageJS Mock Server 구동 유틸 함수
export default function enableMockServer() {
  // Mock Server 환경 설정
  window.server = createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      userData.forEach((data) => server.create("user", data as Record<string, unknown>));
    },
    routes() {
      this.urlPrefix = process.env.EXPO_PUBLIC_API_URL as string; // url 접두사 지정

      // API 문서를 통해 구성한 가짜 Mock API 호출
      userMockRoutes(this);
      searchMockRoutes(this);
    },
  });
}
