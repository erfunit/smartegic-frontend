import { FormField } from "@/types/form-generator.type";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type FormFieldProps = {
    field: FormField;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};
