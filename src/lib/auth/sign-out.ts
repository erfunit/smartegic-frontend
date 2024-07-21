"use server";

import { createData } from "@/core/http-service";
import { getRefreshToken } from "./get-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { cookieName, refreshName, timeStampName } from "./token-names";

export async function signout() {
    const token = await getRefreshToken();
    console.log(
        "--------------------------------- refresh token -----------------------------------",
        token,
        "----------------------------------",
    );
    try {
        const response: any = await createData("/auth/signout", {
            token: token as string,
        });
        // console.log(response);
        if (response.ok) {
            cookies().delete(timeStampName);
            cookies().delete(refreshName);
            cookies().delete(cookieName);
            redirect("/auth/login");
        }
    } catch (error) {
        // console.log(error);
    }
}
