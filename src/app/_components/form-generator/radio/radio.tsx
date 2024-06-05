import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
// import { RadioInput } from "../../inputs/radio-input/radio-input";
import { RadioGroup } from "../../inputs/radio-input/radio-group";

export const Radio = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    return (
        <RadioGroup
            variant="bordered"
            inputProps={{ ...registerProps }}
            items={field.options}
            className={`${errors[field.name] ? "radioinput-error" : ""}`}
        />
    );
};
