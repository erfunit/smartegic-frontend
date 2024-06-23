import { FieldValues, SubmitHandler } from "react-hook-form";

export type FormFieldType =
    | "bool"
    | "MultilingualString"
    | "Phone"
    | "Enum"
    | "Dict"
    | "Link"
    | "Class"
    | "int"
    | "str";

export interface FormField {
    name: string;
    default: any;
    required: boolean;
    description: string | null;
    type: FormFieldType;
    type_name?: string;
    options?: string[];
    multiple?: boolean;
    to?: string;
    fields?: FormField[];
    key?: {
        type: FormFieldType;
    };
    value?: FormField;
}

export interface FormSchema {
    name: string;
    fields: FormField[];
}

export type FormGeneratorProps = {
    title?: string;
    schema?: FormField[];
    onSubmit: SubmitHandler<FieldValues>;
    languages?: string[];
    className?: string;
};
