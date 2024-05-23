import { FormField } from "@/types/form-generator.types";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const getRegisterOptions = (field: FormField) => ({
    required: field.required
        ? {
              value: true,
              message: field.errorMessage || "This field is required",
          }
        : undefined,
    minLength: field.minLength
        ? {
              value: field.minLength,
              message:
                  field.errorMessage || `Minimum length is ${field.minLength}`,
          }
        : undefined,
    maxLength: field.maxLength
        ? {
              value: field.maxLength,
              message:
                  field.errorMessage || `Maximum length is ${field.maxLength}`,
          }
        : undefined,
    min: field.min
        ? {
              value: field.min,
              message: field.errorMessage || `Minimum value is ${field.min}`,
          }
        : undefined,
    max: field.max
        ? {
              value: field.max,
              message: field.errorMessage || `Maximum value is ${field.max}`,
          }
        : undefined,
    pattern: field.pattern
        ? {
              value: new RegExp(field.pattern),
              message: field.errorMessage || "Invalid format",
          }
        : undefined,
});

const renderInputField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <input
        type={field.type}
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        accept={field.accept}
        className={`input input-bordered ${
            errors[field.name] ? "input-error" : ""
        }`}
    />
);

const renderFileField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <input
        type={field.type}
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        accept={field.accept}
        className={`file-input file-input-bordered ${
            errors[field.name] ? "input-error" : ""
        }`}
    />
);

const renderTextareaField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
) => (
    <textarea
        {...register(field.name, getRegisterOptions(field))}
        placeholder={field.placeholder}
        rows={field.rows}
        className={`textarea textarea-bordered ${
            errors[field.name] ? "textarea-error" : ""
        }`}
    />
);

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
            return renderInputField(field, register, errors);
        case "file":
            return renderFileField(field, register, errors);
        case "textarea":
            return renderTextareaField(field, register, errors);
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
