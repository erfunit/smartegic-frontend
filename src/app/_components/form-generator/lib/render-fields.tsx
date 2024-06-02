import React from "react";

import { FormField } from "@/types/form-generator.type";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Checkbox } from "../checkbox/checkbox";
import { Radio } from "../radio/radio";
import { FileInput } from "../file-input/file-input";
import { TextField } from "../text-input/text-field";
import { Textarea } from "../text-area/text-area";
import { Dropdown } from "../dropdown/dropdown";

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
                <FileInput field={field} register={register} errors={errors} />
            );
        case "textarea":
            return (
                <Textarea field={field} register={register} errors={errors} />
            );
        case "select":
            return (
                <Dropdown field={field} register={register} errors={errors} />
            );
        case "radio":
            return <Radio field={field} register={register} errors={errors} />;
        case "checkbox":
            return (
                <Checkbox field={field} register={register} errors={errors} />
            );
        default:
            return null;
    }
};
