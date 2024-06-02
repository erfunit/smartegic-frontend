import React from "react";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import TextInput from "@/components/text-input/text-input";
import { TextInputType } from "../../text-input/text-input.types";

export const TextField = ({ field, register, errors }: FormFieldProps) => {
    return (
        <TextInput
            type={field?.type as TextInputType}
            {...register(field.name, getRegisterOptions(field))}
            placeholder={field.placeholder}
            accept={field.accept}
            className={`input input-bordered ${
                errors[field.name] ? "input-error" : ""
            }`}
        />
    );
};
