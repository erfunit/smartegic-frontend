import { FormField } from "@/types/form-generator.types";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type TextInputProps = {
    field: FormField;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};
