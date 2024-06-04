import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import TextArea from "../../text-area/text-area";

export const TextAreaField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <TextArea
            placeholder={field.placeholder}
            rows={field.rows}
            className={`textarea textarea-bordered ${
                errors[field.name] ? "textarea-error" : ""
            }`}
            {...registerProps}
        />
    );
};
