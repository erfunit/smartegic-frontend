"use client";

import React from "react";
import FormGenerator from "@/components/form-generator";
import { FormField } from "@/types/form-generator.types";
import { SubmitHandler } from "react-hook-form";

const RegistrationForm = ({
    dict,
}: {
    dict: { form: FormField[] };
}): React.JSX.Element => {
    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
    };

    return (
        <div className="container max-w-screen-md px-5 py-5 mx-auto lg:px-0">
            <FormGenerator schema={dict.form} onSubmit={onSubmit} />
        </div>
    );
};

export default RegistrationForm;
