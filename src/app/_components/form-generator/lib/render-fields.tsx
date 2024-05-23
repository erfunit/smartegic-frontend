import { FormField } from "@/types/form-generator";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextInput from "../../text-input";
import { FileInput } from "../../file-input";
import { Textarea } from "../../text-area";
import { Dropdown } from "../../dropdown";
import { Radio } from "../../radio";
import { Checkbox } from "../../checkbox";

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
                <TextInput field={field} register={register} errors={errors} />
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
