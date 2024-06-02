import React from "react";
import { useFormContext } from "react-hook-form";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import TextInput from "@/components/text-input/text-input";
import { TextInputType } from "../../text-input/text-input.types";

export const TextField = ({ field, register, errors }: FormFieldProps) => {
    const { setValue, getValues } = useFormContext();
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <TextInput
            type={field?.type as TextInputType}
            placeholder={field.placeholder}
            accept={field.accept}
            className={`input input-bordered ${
                errors[field.name] ? "input-error" : ""
            }`}
            setValue={setValue}
            value={getValues(field.name)}
            // onChange={handleInputChange}
            {...registerProps}
        />
    );
};
