// import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FileInput from "../../inputs/file-input/file-input";

export const FileInputField = ({ field, errors }: FormFieldProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={field.name}
            control={control}
            defaultValue={[]}
            render={({ field: { onChange } }) => (
                <FileInput
                    variant="bordered"
                    acceptFormat={field.accept}
                    placeholder={field.placeholder}
                    className={`${errors[field.name] ? "input-error" : ""}`}
                    onChange={onChange}
                />
            )}
        />
    );
};
