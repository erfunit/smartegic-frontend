import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields";
import React from "react";

export const FileInput = ({ field, register, errors }: FormFieldProps) => (
    <input
        type={field.type}
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        accept={field.accept}
        className={`file-input file-input-bordered ${
            errors[field.name] ? "input-error" : ""
        }`}
    />
);
