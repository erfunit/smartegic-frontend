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
import { IconMail } from "@/app/_components/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotSchema, ForgotSchemaType } from "./_schema/forgot.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/stores/toast.store";
import { useForgot } from "./_api/forgot";
import { FieldError } from "@/app/_components/Typography/FieldError";

const ForgotPasswordPage = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ForgotSchemaType>({
        resolver: zodResolver(ForgotSchema),
    });
    const router = useRouter();
    const showToast = useToastStore((state) => state.showToast);

    const forgotHandler = useForgot({
        onSuccess: () => {
            router.push(`/auth/reset-password?email=${getValues("email")}`);
            showToast({
                message: "reset password code is sent!",
                type: "success",
            });
        },
    });

    const onSubmit: SubmitHandler<ForgotSchemaType> = (data) => {
        forgotHandler.submit(data);
    };

    return (
        <AuthFormWrapper>
            <AuthFormTitle title="Forgot Password" />
            <AuthFormContainer>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="w-full">
                        <Label>Email Address</Label>
                        <TextInput
                            {...register("email")}
                            name="email"
                            type="email"
                            placeholder="Email Address"
                        />
                        {errors.email?.message && (
                            <FieldError>{errors.email.message}</FieldError>
                        )}
                    </div>
                    <Button
                        isDisabled={forgotHandler.isPending}
                        variant="primary"
                        shape="block"
                        type="submit"
                        className="items-center flex"
                    >
                        <IconMail />
                        Send reset code
                    </Button>
                </form>
                <div className="flex mt-3">
                    <span className="mx-auto text-sm">
                        Remembered that?{" "}
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

export default ForgotPasswordPage;
