import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import React from "react";
import FileInput from "../../file-input/file-input";

export const FileInputField = ({ field, register, errors }: FormFieldProps) => (
    <FileInput
        variant="bordered"
        acceptFormat={field.accept}
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        className={`${errors[field.name] ? "input-error" : ""}`}
    />
);
