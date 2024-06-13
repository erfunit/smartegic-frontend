import React from "react";
import { AuthFormWrapper } from "../../_components/auth-form-wrapper";
import { AuthFormTitle } from "../../_components/auth-form-title";
import { AuthFormContainer } from "../../_components/auth-form-container";
import { TextInput } from "@/app/_components/inputs/text-input";
import { Label } from "@/app/_components/Typography/Label";
import { Button } from "@/app/_components/button";
import { CheckboxInput } from "@/app/_components/inputs/checkbox-input";
import Link from "next/link";
import { IconMail } from "@/app/_components/icons";

const page = () => {
    return (
        <AuthFormWrapper>
            <AuthFormTitle title="Forgot Password" />
            <AuthFormContainer>
                <form action="" className="space-y-4">
                    <div className="w-full space-x-1">
                        <Label>Email Address</Label>
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="Email Address"
                        />
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
                        variant="primary"
                        shape="block"
                        className="items-center flex"
                    >
                        <IconMail />
                        Send a reset link
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

export default page;
