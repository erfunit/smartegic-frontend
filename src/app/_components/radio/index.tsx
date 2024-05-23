import React from "react";
import { FormFieldProps } from "@/types/input-fields";
import { getRegisterOptions } from "@/lib/get-reg-options";

export const Radio = ({ field, register, errors }: FormFieldProps) => (
    <div className="flex items-start gap-x-3">
        {field.options?.map((option) => (
            <label
                key={option}
                className="flex items-center cursor-pointer gap-x-4 label"
            >
                <input
                    type="radio"
                    {...register(field.name, getRegisterOptions(field))}
                    value={option}
                    className={`radio radio-bordered ${
                        errors[field.name] ? "radio-error" : ""
                    }`}
                />
                <span className="label-text">{option}</span>
            </label>
        ))}
    </div>
);
