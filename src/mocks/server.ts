import { createServer } from "miragejs";
import { movieMockRoutes } from "./routes/movie.mock";

// MirageJS Mock Server 구동 유틸 함수
export default function enableMockServer() {
  // Mock Server 환경 설정
  window.server = createServer({
    routes() {
      this.urlPrefix = "https://api.example.com"; // url 접두사 지정

      // API 문서를 통해 구성한 가짜 Mock API 호출
      movieMockRoutes(this);
    },
  });
}
