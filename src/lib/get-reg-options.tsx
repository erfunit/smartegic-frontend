import { FormField } from "@/types/form-generator";

export const getRegisterOptions = (field: FormField) => ({
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
