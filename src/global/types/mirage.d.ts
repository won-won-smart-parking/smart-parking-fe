import { type Server } from "miragejs";

// miragejs Mock API를 사용하기 위해 Window 객체에 server 프로퍼티 타입 확장 정의
declare global {
  interface Window {
    server: Server;
  }
}
