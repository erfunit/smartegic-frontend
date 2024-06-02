import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import TextArea from "../../text-area/text-area";

export const TextAreaField = ({ field, register, errors }: FormFieldProps) => (
    <TextArea
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        rows={field.rows}
        size="lg"
        className={`textarea textarea-bordered ${
            errors[field.name] ? "textarea-error" : ""
        }`}
    />
);
