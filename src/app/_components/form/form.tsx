"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
// import PhoneNumberInput from "@/app/_components/phone-number-input/phone-number-input";
import FormGenerator from "../form-generator/form-generator";
import { FormField } from "@/types/form-generator";

const FormComponent: React.FC<{ formSchema: FormField[] }> = ({
    formSchema,
}) => {
    const methods = useForm<FormData>();

    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <FormGenerator onSubmit={onSubmit} schema={formSchema} />
        </FormProvider>
    );
};

export default FormComponent;
