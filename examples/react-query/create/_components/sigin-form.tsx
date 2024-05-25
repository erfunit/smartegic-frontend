"use client";

import React, { FormEvent, useState } from "react";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    // the form states, which can be handled with react-hook-form (recommended)
    const [mobile, setMobile] = useState<string>("");
    const router = useRouter();

    // getting returned data from use[mutaion] custom hook that we've wrote in ../_api/signin
    // which accepts a { onSuccess: () => void } function as parameter, which happens on successful operation
    const signIn = useSignIn({
        onSuccess: () => {
            router.push(`/verify?mobile=${mobile}`);
        },
    });

    // submit/mutaion handler function that calles
    // it'd better to be SubmitHanlder (from react-hook-form) if using forms.
    // it calles mutation.[runner: mutate] function inside to send request to the backend.
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        signIn.submit({ mobile });
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-16">
            <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                aria-label="enter your number"
            />
            <button type="submit" disabled={signIn.isPending}>
                تایید و دریافت کد
            </button>
        </form>
    );
};

export default SignInForm;
