"use client";

import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { AuthFormWrapper } from "../../_components/auth-form-wrapper";
import { AuthFormTitle } from "../../_components/auth-form-title";
import { AuthFormContainer } from "../../_components/auth-form-container";
import { TextInput } from "@/app/_components/inputs/text-input";
import { Label } from "@/app/_components/Typography/Label";
import { Button } from "@/app/_components/button";
import { IconLogin } from "@/app/_components/icons";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "./_schema/login.schema";
import { useForm } from "react-hook-form";
import { useToastStore } from "@/stores/toast.store";
import { FieldError } from "@/app/_components/Typography/FieldError";
import Link from "next/link";
import { loginAction } from "./_api/login";
import { formDataToObject } from "@/lib/formDataToObject";

type actionResult = {
    message: string;
    type: "error" | "success" | "";
};

const initialState: actionResult | Promise<actionResult> = {
    message: "",
    type: "",
};

const ButtonWithLoading = () => {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            isLoading={pending}
            isDisabled={pending}
            variant="primary"
            shape="block"
            className="items-center flex"
        >
            <IconLogin />
            Login
        </Button>
    );
};

const LoginPage = () => {
    const [state, formAction] = useFormState(loginAction, initialState);
    const {
        register,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
    });
    const router = useRouter();
    const showToast = useToastStore((state) => state.showToast);

    useEffect(() => {
        if (state.message && state.type !== "") {
            showToast({
                message: state.message,
                type: state.type,
            });
        }

        if (state.type === "success") router.push("/");
    }, [state]);

    return (
        <AuthFormWrapper>
            <AuthFormTitle title="Login" />
            <AuthFormContainer>
                <form
                    action={(formdata) => {
                        const model: LoginSchemaType =
                            formDataToObject<LoginSchemaType>(formdata);
                        formAction(model);
                    }}
                    className="space-y-3"
                >
                    <div className="w-full">
                        <Label>Email Address</Label>
                        <TextInput
                            {...register("email")}
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                        {errors.email?.message && (
                            <FieldError>{errors.email.message}</FieldError>
                        )}
                    </div>
                    <div className="w-full">
                        <Label>Password</Label>
                        <TextInput
                            {...register("password")}
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {errors.password?.message && (
                            <FieldError>{errors.password.message}</FieldError>
                        )}
                    </div>
                    <div className="w-full flex">
                        <Button
                            variant="ghost"
                            size="xs"
                            isLink
                            href="/auth/forgot-password"
                            type="button"
                            className="ms-auto"
                        >
                            Forgot Password?
                        </Button>
                    </div>
                    <ButtonWithLoading />
                </form>
                <div className="flex mt-3">
                    <span className="mx-auto text-sm">
                        No account yet?{" "}
                        <Link
                            href="/auth/register"
                            className="text-primary underline"
                        >
                            create one
                        </Link>
                    </span>
                </div>
            </AuthFormContainer>
        </AuthFormWrapper>
    );
};

export default LoginPage;
