"use client";

import React from "react";
import FormGenerator from "@/app/_components/form-generator/form-generator";
import { FormField } from "@/types/form-generator";
import { SubmitHandler } from "react-hook-form";

const RegistrationForm = ({
    dict,
}: {
    dict: { test_form: FormField[] };
}): React.JSX.Element => {
    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
    };

    return (
        <div className="container max-w-screen-md px-5 py-5 mx-auto lg:px-0">
            <FormGenerator schema={dict.test_form} onSubmit={onSubmit} />
        </div>
    );
};

export default RegistrationForm;
