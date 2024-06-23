import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { SelectInput } from "../../inputs/select-input/select-input";

type DropdownProps = FormFieldProps & {
    to?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
    field,
    register,
    errors,
    to,
}) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    console.log(to);
    return (
        <SelectInput
            variant="bordered"
            {...registerProps}
            items={field.options}
            className={`${errors[field.name] ? "selectinput-error" : ""}`}
        />
    );
};
