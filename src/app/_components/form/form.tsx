"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
// import PhoneNumberInput from "@/app/_components/phone-number-input/phone-number-input";
import FormGenerator from "../form-generator/form-generator";
import { FormField } from "@/types/form-generator.type";
import { useToastStore } from "@/stores/toast.store";

const FormComponent: React.FC<{ formSchema: FormField[] }> = ({
    formSchema,
}) => {
    const showToast = useToastStore((state) => state.showToast);
    const methods = useForm<FormData>();

    const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
        console.log(data);
        showToast({
            type: "success",
            message: "your information is submitted",
        });
    };

    return (
        <FormProvider {...methods}>
            <FormGenerator onSubmit={onSubmit} schema={formSchema} />
        </FormProvider>
    );
};

export default FormComponent;
