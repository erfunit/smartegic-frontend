import React from "react";
import LoginForm from "./_components/form";
import { FormField } from "@/types/form-generator";
import { getDictionary } from "@/lib/dictionary";

export default async function LoginPage({
    params: { lang },
}: {
    params: { lang: string };
}) {
    const dict: { login_form: FormField[] } = await getDictionary(
        lang as "en" | "fa",
    );

    console.log(lang);
    return (
        <div className="container max-w-xl px-5 py-5 mx-auto border lg:px-0 border-white/15">
            <LoginForm dict={dict} />
        </div>
    );
}
