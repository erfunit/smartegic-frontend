import { cookies } from "next/headers";
import { cookieName, refreshName, tokenType } from "./saveSession";

export function getAccessToken(withBearer = false): string | undefined {
    const token = cookies().get(cookieName)?.value;
    if (withBearer && token) return tokenType.concat(token);
    return token;
}

export function getRefreshToken(): string | undefined {
    return cookies().get(refreshName)?.value;
}
