import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormField } from "@/types/form-generator";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import TextInput from "../../text-input";
import { FileInput } from "../../file-input";
import { Textarea } from "../../text-area";

const renderSelectField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <select
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
    </select>
);

const renderRadioField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <div className="flex items-start gap-x-3">
        {field.options?.map((option) => (
            <label
                key={option}
                className="flex items-center cursor-pointer gap-x-4 label"
            >
                <input
                    type="radio"
                    {...register(field.name, getRegisterOptions(field))}
                    value={option}
                    className={`radio radio-bordered ${
                        errors[field.name] ? "radio-error" : ""
                    }`}
                />
                <span className="label-text">{option}</span>
            </label>
        ))}
    </div>
);

const renderCheckboxField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <div className="flex gap-x-3">
        {field.options?.map((option) => (
            <label key={option} className="flex gap-2 cursor-pointer label">
                <input
                    type="checkbox"
                    {...register(field.name, getRegisterOptions(field))}
                    value={option}
                    className={`checkbox checkbox-bordered ${
                        errors[field.name] ? "checkbox-error" : ""
                    }`}
                />
                <span className="label-text">{option}</span>
            </label>
        ))}
    </div>
);

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
            return renderSelectField(field, register, errors);
        case "radio":
            return renderRadioField(field, register, errors);
        case "checkbox":
            return renderCheckboxField(field, register, errors);
        default:
            return null;
    }
};
