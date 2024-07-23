"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FormGeneratorProps } from "@/types/form-generator.type";
import { renderField } from "./lib/render-fields";
import clsx from "clsx";
import { Label } from "../Typography/Label";
import { FieldError } from "../Typography/FieldError";
import { Button } from "../button";
import { useDictionary } from "@/context/dictionary-context";
import { useLang } from "@/context/lang-context";

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
    } = useForm();
    const lang = useLang();

    const classes = clsx("space-y-4 text-xl", className);
    const dictionary: any = useDictionary();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes}>
            {title && <span className="text-xl font-bold">{title}</span>}
            {schema?.map((field) => (
                <div key={field.name} className="form-control">
                    <Label>{dictionary.form_labels[field.name]}</Label>
                    {renderField(field, register, errors, lang)}
                    {errors[field.name] && (
                        <FieldError>
                            {errors[field.name]?.message as string}
                        </FieldError>
                    )}
                </div>
            ))}
            <Button
                variant="neutral"
                size="md"
                shape="wide"
                type="submit"
                className="px-6 btn btn-primary"
            >
                Submit
            </Button>
        </form>
    );
};

export default FormGenerator;
