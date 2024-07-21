//@ts-nocheck
"use server";

import { cookies } from "next/headers";
import { cookieName, refreshName, tokenType } from "./token-names";
// import { createData } from "@/core/http-service";
// import { deleteCookies } from "./remove-session";

// const TOKEN_VALIDITY_PERIOD = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
// const TOKEN_VALIDITY_PERIOD = 10 * 1000; // 2 hours in milliseconds

export async function getAccessToken(
    withBearer = false,
): Promise<string | undefined> {
    console.log("GETTING ACCESS TOKEN CALLING............................");
    const token = cookies().get(cookieName)?.value;

    if (withBearer && token) return tokenType.concat(token);
    return token;
}

export async function getRefreshToken(): string | undefined {
    return cookies().get(refreshName)?.value;
}
