"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FormGeneratorProps } from "@/types/form-generator";
import { renderField } from "./lib/render-fields";
import clsx from "clsx";

const FormGenerator: React.FC<FormGeneratorProps> = ({
    schema,
    onSubmit,
    className,
    title,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        // watch,
    } = useForm();

    const classes = clsx("space-y-4 text-xl", className);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            {title && <span className="text-xl font-bold">{title}</span>}
            {schema.map((field) => (
                <div key={field.name} className="form-control">
                    <label className="label">
                        <span className="label-text">{field.label}</span>
                    </label>
                    {renderField(field, register, errors)}
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
