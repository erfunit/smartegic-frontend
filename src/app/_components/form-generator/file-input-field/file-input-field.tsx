import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import React from "react";
import FileInput from "../../inputs/file-input/file-input";

export const FileInputField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name, getRegisterOptions(field));

    return (
        <FileInput
            variant="bordered"
            acceptFormat={field.accept}
            placeholder={field.placeholder}
            className={`${errors[field.name] ? "input-error" : ""}`}
            {...registerProps}
        />
    );
};
