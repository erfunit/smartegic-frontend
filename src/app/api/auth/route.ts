import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json(
        {
            status: true,
            message: "ورود موفق - خوش آمدید",
            data: {
                hasProfile: true,
            },
        },
        { status: 200 },
    );

    response.cookies.set({
        name: "access-token",
        value: "toooooken",
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    return response;
}
