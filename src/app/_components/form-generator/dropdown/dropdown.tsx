import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { SelectInput } from "../../inputs/select-input/select-input";

export const Dropdown = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    return (
        <SelectInput
            variant="bordered"
            {...registerProps}
            items={field.options}
            className={`${errors[field.name] ? "selectinput-error" : ""}`}
        />
    );
};
