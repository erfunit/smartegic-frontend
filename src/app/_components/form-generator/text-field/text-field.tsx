import React from "react";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import TextInput from "@/app/_components/inputs/text-input/text-input";
import { TextInputType } from "../../inputs/text-input/text-input.types";

export const TextField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <TextInput
            type={field?.type as TextInputType}
            placeholder={field.placeholder}
            accept={field.accept}
            className={`input input-bordered ${
                errors[field.name] ? "input-error" : ""
            }`}
            {...registerProps}
        />
    );
};
