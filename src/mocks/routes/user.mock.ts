import { Response, Server } from "miragejs";

/**
 * User Mock API
 * 로그인, 로그아웃, 회원가입 등의 API를 흉내내는 Mock Object를 구성
 */
export function userMockRoutes(server: Server) {
  // Email 중복 검사 API
  server.get("/api/auth/emails", (schema, request) => {
    const { email } = request.queryParams as { email: string };

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

  // 회원가입 API
  server.post("/api/auth/sign-up", (schema, request) => {
    const formData = request.requestBody as unknown as FormData;

    // Schema에 저장할 User 정보를 구성한다.
    const userInfo: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      if (key === "passwordConfirm") continue;
      else if (key === "profile" && typeof value === "object") {
        // 이미지를 저장한다.
        userInfo[key] = "/src/shared/assets/images/mock-profile-image.webp";
        continue;
      }

      userInfo[key] = value;
    }

    // Schema에 User를 저장한다.
    schema.db.users.insert(userInfo);
    return { status: true };
  });
}
