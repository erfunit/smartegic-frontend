"use server";

import { LoginSchema, LoginSchemaType } from "../_schema/login.schema";
import { createData } from "@/core/http-service";
import { saveSession } from "@/lib/auth/save-session";
import { timeStampName } from "@/lib/auth/token-names";
import { cookies } from "next/headers";

type LoginResponse = {
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

    if (!validatedFields.success) {
        return {
            message: "Validation failed",
            type: "error",
        };
    }

    try {
        const result = await createData<LoginSchemaType, LoginResponse>(
            "/auth/login",
            model,
        );
        const currentTimestamp = Date.now();
        await saveSession(result.data.access_token, result.data.refresh_token);

        cookies().set(timeStampName, currentTimestamp.toString(), {
            httpOnly: true,
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
