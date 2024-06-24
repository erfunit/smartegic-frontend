"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormGenerator from "../form-generator/form-generator";
import { FormField } from "@/types/form-generator.type";
import { useToastStore } from "@/stores/toast.store";

const FormComponent: React.FC<{
    formSchema: FormField[];
    languages?: string[];
}> = ({ formSchema, languages = ["en", "fa"] }) => {
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
            <FormGenerator
                onSubmit={onSubmit}
                schema={formSchema}
                languages={languages}
            />
        </FormProvider>
    );
};

export default FormComponent;
