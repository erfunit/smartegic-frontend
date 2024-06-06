import React from "react";

import { FormField } from "@/types/form-generator.type";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { CheckboxField } from "../checkbox-field/checkbox-field";
import { RadioField } from "../radio-field/radio-field";
import { TextField } from "../text-field/text-field";
import { Dropdown } from "../dropdown/dropdown";
import { TextAreaField } from "../text-area-field";
import { FileInputField } from "../file-input-field";

export const renderField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
): React.JSX.Element | null => {
    switch (field.type) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "date":
            return (
                <TextField field={field} register={register} errors={errors} />
            );
        case "file":
            return (
                <FileInputField
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "textarea":
            return (
                <TextAreaField
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "select":
            return (
                <Dropdown field={field} register={register} errors={errors} />
            );
        case "radio":
            return (
                <RadioField field={field} register={register} errors={errors} />
            );
        case "checkbox":
            return (
                <CheckboxField
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        default:
            return null;
    }
};
