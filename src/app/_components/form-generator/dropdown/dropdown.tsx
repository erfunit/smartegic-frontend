import React from "react";
import { FormFieldProps } from "@/types/input-fields";
import { getRegisterOptions } from "@/lib/get-reg-options";

export const Dropdown = ({ field, register, errors }: FormFieldProps) => (
    <select
        {...register(field.name, getRegisterOptions(field))}
        className={`select select-bordered ${
            errors[field.name] ? "select-error" : ""
        }`}
    >
        <option value="">Select...</option>
        {field.options?.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
);
