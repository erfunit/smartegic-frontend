import { SubmitHandler } from "react-hook-form";

export interface FormField {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    step?: number;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
    options?: string[];
    accept?: string;
    rows?: number;
    errorMessage?: string;
}

export interface FormGeneratorProps {
    schema: FormField[];
    className?: string;
    title?: string;
    onSubmit: SubmitHandler<Record<string, any>>;
}
