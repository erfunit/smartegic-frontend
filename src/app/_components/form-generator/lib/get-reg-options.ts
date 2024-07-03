// @ts-nocheck

import { FormField } from "@/types/form-generator.type";

export const getRegisterOptions = (field: FormField) => {
    const options: any = {};
    if (field.required)
        options.required = field.description || "This field is required";
    if (field.minLength)
        options.minLength = {
            value: field.minLength,
            message:
                field.description || `Minimum length is ${field.minLength}`,
        };
    if (field.maxLength)
        options.maxLength = {
            value: field.maxLength,
            message:
                field.description || `Maximum length is ${field.maxLength}`,
        };
    if (field.pattern)
        options.pattern = {
            value: new RegExp(field.pattern),
            message: field.description || "Invalid format",
        };
    return options;
};
