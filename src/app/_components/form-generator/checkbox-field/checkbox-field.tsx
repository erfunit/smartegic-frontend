import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { CheckboxGroup } from "../../inputs/checkbox-input/checkbox-group";

export const CheckboxField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    return (
        <CheckboxGroup
            variant="bordered"
            inputProps={{ ...registerProps }}
            items={field.options}
            className={`${errors[field.name] ? "radioinput-error" : ""}`}
        />
    );
};
