import React from "react";
import { FormField } from "@/types/form-generator.type";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { renderField } from "../lib/render-fields";

interface ClassFieldProps {
    field: FormField;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    languages: string[];
}

export const ClassField: React.FC<ClassFieldProps> = ({
    field,
    register,
    errors,
    languages,
}) => {
    return (
        <div>
            <label>{field.description}</label>
            <div className="space-y-2">
                {field.fields?.map((subField, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                        {renderField(
                            {
                                ...subField,
                                name: `${field.name}.${subField.name}`,
                            },
                            register,
                            errors,
                            languages,
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
