"use client";

import React from "react";
import { AuthFormWrapper } from "../../_components/auth-form-wrapper";
import { AuthFormTitle } from "../../_components/auth-form-title";
import { AuthFormContainer } from "../../_components/auth-form-container";
import { TextInput } from "@/app/_components/inputs/text-input";
import { Label } from "@/app/_components/Typography/Label";
import { Button } from "@/app/_components/button";
// import { CheckboxInput } from "@/app/_components/inputs/checkbox-input";
import Link from "next/link";
// import Image from "next/image";
import { IconRegister } from "@/app/_components/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "./_schema/setotp.types";
import { FieldError } from "@/app/_components/Typography/FieldError";
import { useSetotp } from "./_api/setotp";
import { useRouter, useSearchParams } from "next/navigation";
import { useToastStore } from "@/stores/toast.store";

const SetotpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
    });
    const router = useRouter();
    const showToast = useToastStore((state) => state.showToast);
    const searchParams = useSearchParams();
    const email: string | null = searchParams.get("email");

    const registerHandler = useSetotp({
        onSuccess: () => {
            router.push(`/auth/login`);
            showToast({
                message: "registeration succeeded",
                type: "success",
            });
        },
    });

    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
        if (!email) router.push("/auth/register");
        registerHandler.submit({ ...data, email });
    };

    return (
        <AuthFormWrapper>
            <AuthFormTitle title="Register" />
            <AuthFormContainer>
                <form
                    className="space-y-4"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full space-y-1">
                        <Label>Verification code</Label>
                        <TextInput
                            {...register("otp")}
                            name="otp"
                            placeholder="Verification code"
                            type="text"
                        />
                        {errors.otp?.message && (
                            <FieldError>{errors.otp.message}</FieldError>
                        )}
                    </div>
                    <div className="w-full space-y-1">
                        <Label>Password</Label>
                        <TextInput
                            {...register("password")}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        {errors.password?.message && (
                            <FieldError>{errors.password.message}</FieldError>
                        )}
                    </div>
                    <div className="w-full space-y-1">
                        <Label>confirmPassword</Label>
                        <TextInput
                            {...register("confirmPassword")}
                            name="confirmPassword"
                            placeholder="confirmPassword"
                            type="password"
                        />
                        {errors.confirmPassword?.message && (
                            <FieldError>
                                {errors.confirmPassword.message}
                            </FieldError>
                        )}
                    </div>
                    <Button
                        variant="primary"
                        shape="block"
                        type="submit"
                        isDisabled={registerHandler.isPending}
                        className="items-center flex mt-3"
                    >
                        <IconRegister />
                        Register
                    </Button>
                </form>
                <div className="flex mt-3">
                    <span className="mx-auto text-sm">
                        Already created one?{" "}
                        <Link
                            href="/auth/login"
                            className="text-primary underline"
                        >
                            login
                        </Link>
                    </span>
                </div>
            </AuthFormContainer>
        </AuthFormWrapper>
    );
};

export default SetotpPage;
