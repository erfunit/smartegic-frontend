import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";

export const Textarea = ({ field, register, errors }: FormFieldProps) => (
    <textarea
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        rows={field.rows}
        className={`textarea textarea-bordered ${
            errors[field.name] ? "textarea-error" : ""
        }`}
    />
);
