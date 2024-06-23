import React from "react";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import TextInput from "@/app/_components/inputs/text-input/text-input";
import { TextInputType } from "../../inputs/text-input/text-input.types";

type TextFieldProps = Omit<FormFieldProps, "type"> & {
    type?: "number" | "text" | "email" | "password";
};

export const TextField: React.FC<TextFieldProps> = ({
    field,
    register,
    errors,
}) => {
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <TextInput
            type={field?.type as TextInputType}
            placeholder={
                field.description === null ? undefined : field.description
            }
            className={`input input-bordered ${
                errors[field.name] ? "input-error" : ""
            }`}
            {...registerProps}
        />
    );
};
