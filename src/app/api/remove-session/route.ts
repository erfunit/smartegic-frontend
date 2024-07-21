import { removeSession } from "@/lib/auth/remove-session";
import { NextResponse } from "next/server";

export async function POST() {
    await removeSession();
    return NextResponse.json({ success: "success" });
}
