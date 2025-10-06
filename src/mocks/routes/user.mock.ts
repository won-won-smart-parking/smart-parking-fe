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

  // 로그인 API
  server.post("/api/auth/sign-in", (schema, request) => {
    const formData = request.requestBody as unknown as FormData;

    // 이메일 정보 확인 후 비밀번호 체크
    const email = formData.get("email");
    if (schema.db.users.findBy({ email })) {
      const userInfo = schema.db.users.findBy({ email, password: formData.get("password") });

      // 비밀번호 정보까지 확인 후 토큰 + 유저 정보 반환
      if (userInfo) {
        return new Response(
          200,
          {},
          {
            accessToken: "access-token",
            refreshToken: "refresh-token",
            user: {
              id: userInfo.id,
              name: userInfo.name,
              profile: userInfo.profile,
            },
          },
        );
      }

      return new Response(401, {}, { error: "INVALID_PASSWORD", message: "비밀번호가 일치하지 않습니다." }); // 비밀번호 불일치 시 로그인 실패
    }

    // 이메일 정보가 없을 시 로그인 실패
    return new Response(401, {}, { error: "EMAIL_NOT_FOUND", message: "입력하신 이메일 정보가 존재하지 않습니다." });
  });
}
