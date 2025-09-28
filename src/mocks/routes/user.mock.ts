import { Response, Server } from "miragejs";

export function userMockRoutes(server: Server) {
  // Email 중복 검사 API
  server.get("/api/auth/emails", (schema, request) => {
    const { email } = request.queryParams as { email?: string };

    // Email 중복 검사
    if (schema.db.users.findBy({ email })) {
      return new Response(
        409,
        {},
        {
          error: "DuplicateEmail",
          message: "작성한 이메일은 다른 사용자가 사용 중입니다.",
        },
      );
    }

    return new Response(200);
  });
}
