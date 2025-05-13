// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// 인증이 필요한 경로
const protectedPaths = ["/write"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!isProtected) return NextResponse.next();

  // ✅ 서버에 세션 유효성 확인 요청
  const response = await fetch("https://minq.online/user/me", {
    headers: {
      cookie: request.headers.get("cookie") || "", // 전달받은 쿠키 포함
    },
    credentials: "include",
    cache: "no-store", // 캐시 금지
  });
  if (response.status === 200) {
    return NextResponse.next(); // 세션 유효
  }
  console.log(response);
  // 세션이 유효하지 않으면 리다이렉트를 해야하지만 일단 홈으로 이동시킴
  const loginUrl = new URL("/", request.url);
  loginUrl.searchParams.set("from", pathname);
  // console.log(new URL("/", request.url));
  // return NextResponse.redirect(loginUrl);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/write/:path*"],
};