import { useEffect } from "react";

// MSW(Mocking Service Worker) 초기화 및 활성화 사용자 정의 훅(Custom Hooks)
export function useMockServiceWorker() {
  useEffect(() => {
    async function enableMocking() {
      if (!__DEV__) return;

      await import("../../../msw.polyfills.js");
      const { server } = await import("@/mocks/server.ts");
      server.listen();
    }

    enableMocking();
  }, []);
}
