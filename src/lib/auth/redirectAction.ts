"use server";

import { redirect } from "next/navigation";

export async function redirectAction(to = "/auth/login") {
    redirect(to);
}
