import React from "react";
import { FormFieldProps } from "@/types/input-fields";
import { getRegisterOptions } from "@/lib/get-reg-options";

export const Checkbox = ({ field, register, errors }: FormFieldProps) => (
    <div className="flex gap-x-3">
        {field.options?.map((option) => (
            <label key={option} className="flex gap-2 cursor-pointer label">
                <input
                    type="checkbox"
                    {...register(field.name, getRegisterOptions(field))}
                    value={option}
                    className={`checkbox checkbox-bordered ${
                        errors[field.name] ? "checkbox-error" : ""
                    }`}
                />
                <span className="label-text">{option}</span>
            </label>
        ))}
    </div>
);
