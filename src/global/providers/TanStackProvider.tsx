import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// TanStack Query Provider 컴포넌트 구성
const queryClient = new QueryClient();
export default function TanStackProvider({ children }: { children: React.ReactNode }) {
  // prettier-ignore
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
