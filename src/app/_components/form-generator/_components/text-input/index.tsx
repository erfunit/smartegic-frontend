import React from "react";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields";

export const TextInput = ({ field, register, errors }: FormFieldProps) => {
    return (
        <input
            type={field.type}
            {...register(field.name, getRegisterOptions(field))}
            placeholder={field.placeholder}
            accept={field.accept}
            className={`input input-bordered ${
                errors[field.name] ? "input-error" : ""
            }`}
        />
    );
};
