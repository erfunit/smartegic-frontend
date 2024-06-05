import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { SelectInput } from "../../inputs/selec-input/select-input";

export const Dropdown = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    return (
        <>
            {/* <select
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
            </select> */}
            <SelectInput
                variant="bordered"
                {...registerProps}
                items={field.options}
                className={`${errors[field.name] ? "selectinput-error" : ""}`}
            />
        </>
    );
};
