import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import TextArea from "../../inputs/text-area/text-area";

export const TextAreaField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <TextArea
            variant="bordered"
            placeholder={field.description ?? undefined}
            // rows={field.rows}
            className={`textarea textarea-bordered ${
                errors[field.name] ? "textarea-error" : ""
            }`}
            {...registerProps}
        />
    );
};
