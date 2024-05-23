"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FormField, FormGeneratorProps } from "@/types/form-generator.types";

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // watch,
    } = useForm();

    const renderField = (field: FormField) => {
        const registerOptions = {
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
                          field.errorMessage ||
                          `Minimum length is ${field.minLength}`,
                  }
                : undefined,
            maxLength: field.maxLength
                ? {
                      value: field.maxLength,
                      message:
                          field.errorMessage ||
                          `Maximum length is ${field.maxLength}`,
                  }
                : undefined,
            min: field.min
                ? {
                      value: field.min,
                      message:
                          field.errorMessage || `Minimum value is ${field.min}`,
                  }
                : undefined,
            max: field.max
                ? {
                      value: field.max,
                      message:
                          field.errorMessage || `Maximum value is ${field.max}`,
                  }
                : undefined,
            pattern: field.pattern
                ? {
                      value: new RegExp(field.pattern),
                      message: field.errorMessage || "Invalid format",
                  }
                : undefined,
        };

        switch (field.type) {
            case "text":
            case "email":
            case "password":
            case "number":
            case "date":
                return (
                    <input
                        type={field.type}
                        {...register(field.name, registerOptions)}
                        placeholder={field.placeholder}
                        accept={field.accept}
                        className={`input input-bordered ${
                            errors[field.name] && "input-error"
                        }`}
                    />
                );
            case "file":
                return (
                    <input
                        type={field.type}
                        {...register(field.name, registerOptions)}
                        placeholder={field.placeholder}
                        accept={field.accept}
                        className={`file-input file-input-bordered ${
                            errors[field.name] && "input-error"
                        }`}
                    />
                );
            case "textarea":
                return (
                    <textarea
                        {...register(field.name, registerOptions)}
                        placeholder={field.placeholder}
                        rows={field.rows}
                        className={`textarea textarea-bordered ${
                            errors[field.name] && "textarea-error"
                        }`}
                    ></textarea>
                );
            case "select":
                return (
                    <select
                        {...register(field.name, registerOptions)}
                        className={`select select-bordered ${
                            errors[field.name] && "select-error"
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
            case "radio":
                return (
                    <div className="flex items-start gap-x-3">
                        {field.options?.map((option) => (
                            <label
                                key={option}
                                className="flex items-center cursor-pointer gap-x-4 label"
                            >
                                <input
                                    type="radio"
                                    {...register(field.name, registerOptions)}
                                    value={option}
                                    className={`radio radio-bordered ${
                                        errors[field.name] && "radio-error"
                                    }`}
                                />
                                <span className="label-text">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            case "checkbox":
                return (
                    <div className="flex gap-x-3">
                        {field.options?.map((option) => (
                            <label
                                key={option}
                                className="flex gap-2 cursor-pointer label"
                            >
                                <input
                                    type="checkbox"
                                    {...register(field.name, registerOptions)}
                                    value={option}
                                    className={`checkbox checkbox-bordered ${
                                        errors[field.name] && "checkbox-error"
                                    }`}
                                />
                                <span className="label-text">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xl">
            {schema.map((field) => (
                <div key={field.name} className="form-control">
                    <label className="label">
                        <span className="label-text">{field.label}</span>
                    </label>
                    {renderField(field)}
                    {errors[field.name] && (
                        <span className="mt-2 text-sm font-light text-red-500">
                            {errors[field.name]?.message as string}
                        </span>
                    )}
                </div>
            ))}
            <button type="submit" className="px-6 btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default FormGenerator;
