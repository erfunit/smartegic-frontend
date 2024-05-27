"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import PhoneNumberInput from "@/app/_components/phone-number-input/phone-number-input";
import { CountryOption } from "../phone-number-input/_types/index";

interface FormData {
    country: CountryOption | null;
    phone: string;
}

const FormComponent: React.FC = () => {
    const methods = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <PhoneNumberInput
                    control={methods.control}
                    errors={methods.formState.errors}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </FormProvider>
    );
};

export default FormComponent;
