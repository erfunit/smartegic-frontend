"use client";

import React, { FormEvent, useState } from "react";
import { useSignIn } from "../_api/signin";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const [mobile, setMobile] = useState<string>("");
    const router = useRouter();

    /**
     * Custom hook for signing in.
     *
     * The `useSignIn` hook returns an object with methods for handling sign-in requests.
     * It accepts an `onSuccess` callback that is called when the sign-in is successful.
     *
     * @typedef {Object} SignInHandler
     * @property {function(Object): void} submit - Function to call with sign-in data.
     * @property {boolean} isPending - Indicates if the sign-in request is pending.
     */
    const signIn: ReturnType<typeof useSignIn> = useSignIn({
        onSuccess: () => {
            router.push(`/verify?mobile=${mobile}`);
        },
    });

    /**
     * Submit handler for the sign-in form.
     *
     * This function handles the form submission event, prevents the default form submission,
     * and calls the `submit` method of the `signIn` handler with the mobile number.
     *
     * @param {FormEvent} event - The form submission event.
     */
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
