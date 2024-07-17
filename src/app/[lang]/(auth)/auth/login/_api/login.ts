"use server";

import { LoginSchema, LoginSchemaType } from "../_schema/login.schema";
import { createData } from "@/core/http-service";
import { saveSession } from "@/lib/auth/saveSession";
import { cookies } from "next/headers";

type LoginReponse = {
    data: {
        refresh_token: string;
        access_token: string;
    };
    ok: boolean;
    status: number;
};

export const loginAction = async (
    prevState: any,
    model: LoginSchemaType,
): Promise<{ message: string; type: "success" | "error" | "" }> => {
    const validatedFields = LoginSchema.safeParse({
        email: model.email,
        password: model.password,
    });

    if (!validatedFields.success)
        return {
            message: "validation faild",
            type: "error",
        };

    try {
        const result = await createData<LoginSchemaType, LoginReponse>(
            "/auth/login",
            model,
        );
        saveSession(result.data.access_token);
        cookies().set("refresh-token", result.data.refresh_token, {
            httpOnly: false,
        });

        return {
            message: "Logged in successfully.",
            type: "success",
        };
    } catch (error) {
        return {
            message: "Request failed!",
            type: "error",
        };
    }
};
