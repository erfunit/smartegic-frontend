"use client";

import React, { FormEvent } from "react";
import { AuthFormWrapper } from "../../_components/auth-form-wrapper";
import { AuthFormTitle } from "../../_components/auth-form-title";
import { AuthFormContainer } from "../../_components/auth-form-container";
import { TextInput } from "@/app/_components/inputs/text-input";
import { Label } from "@/app/_components/Typography/Label";
import { Button } from "@/app/_components/button";
import { CheckboxInput } from "@/app/_components/inputs/checkbox-input";
import Link from "next/link";
import Image from "next/image";
import { IconLogin } from "@/app/_components/icons";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const onSubmitHanlder = async (event: FormEvent) => {
        event.preventDefault();
        await fetch("/api/auth/", {
            method: "POST",
        })
            .then((res) => res.json())
            .then(console.log);
        router.replace("/");
    };
    return (
        <AuthFormWrapper>
            <AuthFormTitle title="Login" />
            <AuthFormContainer>
                <form onSubmit={onSubmitHanlder} className="space-y-3">
                    <div className="w-full space-x-1">
                        <Label>Email Address</Label>
                        <TextInput name="email" type="email" />
                    </div>
                    <div className="w-full space-x-1">
                        <Label>Password</Label>
                        <TextInput name="password" type="password" />
                    </div>
                    <div className="w-full flex">
                        <Button
                            variant="ghost"
                            size="xs"
                            type="button"
                            className="ms-auto"
                        >
                            Forgot Password?
                        </Button>
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <CheckboxInput variant="primary" id="accept" />
                        <Label htmlFor="accept">
                            I agree with{" "}
                            <Link href="/" className="underline text-primary">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        shape="block"
                        className="items-center flex"
                    >
                        <IconLogin />
                        Login
                    </Button>
                    <Button
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
                        Login With Google
                    </Button>
                </form>
            </AuthFormContainer>
        </AuthFormWrapper>
    );
};

export default LoginPage;
