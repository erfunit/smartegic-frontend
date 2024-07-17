import { cookies } from "next/headers";
import { cookieName } from "./saveSession";

export function removeSession() {
    cookies().delete(cookieName);
}
