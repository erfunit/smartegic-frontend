"use client";

import React from "react";
import { FormField } from "@/types/form-generator.type";
import { SubmitHandler } from "react-hook-form";
import FormGenerator from "@/app/_components/form-generator/form-generator";

const LoginForm = ({
    dict,
}: {
    dict: { login_form: FormField[] };
}): React.JSX.Element => {
    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
    };

    return (
        <div className="container my-9 max-w-screen-md px-5 py-5 mx-auto lg:px-0">
            <FormGenerator
                schema={dict.login_form}
                onSubmit={onSubmit}
                className="p-4"
            />
        </div>
    );
};

export default LoginForm;
