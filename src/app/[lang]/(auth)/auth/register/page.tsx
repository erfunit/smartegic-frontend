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
import { RegisterSchema, RegisterSchemaType } from "./_schema/register.type";
import { FieldError } from "@/app/_components/Typography/FieldError";
import { useRegister } from "./_api/register";
import { useRouter } from "next/navigation";
import { useToastStore } from "@/stores/toast.store";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
    });
    const router = useRouter();
    const showToast = useToastStore((state) => state.showToast);

    const registerHandler = useRegister({
        onSuccess: () => {
            router.push(`/auth/login`);
            showToast({
                message: "registeration succeeded",
                type: "success",
            });
        },
    });

    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
        registerHandler.submit(data);
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
                    {/* <div className="w-full space-x-1">
                        <Label>Username</Label>
                        <TextInput
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div> */}
                    <div className="w-full space-y-1">
                        <Label>Email Address</Label>
                        <TextInput
                            {...register("email")}
                            name="email"
                            placeholder="Email Address"
                            type="email"
                        />
                        {errors.email?.message && (
                            <FieldError>{errors.email.message}</FieldError>
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

                    {/* <div className="w-full flex items-center gap-2">
                        <CheckboxInput variant="primary" id="accept" />
                        <Label htmlFor="accept">
                            I agree with{" "}
                            <Link href="/" className="underline text-primary">
                                terms and conditions
                            </Link>
                        </Label>
                    </div> */}
                    <Button
                        variant="primary"
                        shape="block"
                        type="submit"
                        isDisabled={registerHandler.isPending}
                        className="items-center flex"
                    >
                        <IconRegister />
                        Register
                    </Button>
                    {/* <Button
                        variant="ghost"
                        isOutline
                        shape="block"
                        className="flex items-center flex-row"
                    >
                        <Image
                            src="/images/google.svg"
                            width={26}
                            height={26}
                            alt="google"
                        />
                        Register With Google
                    </Button> */}
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

export default RegisterPage;
