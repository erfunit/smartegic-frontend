"use server";

import { cookies } from "next/headers";
import { cookieName, refreshName } from "./token-names";

export async function saveSession(
    accessToken: string,
    refreshToken: string,
    httpOnly = true,
) {
    const secure = process.env.NODE_ENV === "production";
    cookies().set(cookieName, accessToken, {
        httpOnly,
        secure,
    });
    cookies().set(refreshName, refreshToken, {
        httpOnly: false,
        secure,
    });
}
