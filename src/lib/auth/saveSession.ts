import { cookies } from "next/headers";

export const cookieName = "access-token";

export function saveSession(accessToken: string, httpOnly = true) {
    cookies().set(cookieName, accessToken, {
        httpOnly,
        secure: process.env.NODE_ENV === "production",
    });
}
