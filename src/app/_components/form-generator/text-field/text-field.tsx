import React from "react";
import { getRegisterOptions } from "@/lib/get-reg-options";
import { FormFieldProps } from "@/types/input-fields.type";
import TextInput from "@/app/_components/inputs/text-input/text-input";
import { TextInputType } from "../../inputs/text-input/text-input.types";
import { useDictionary } from "@/context/dictionary-context";

type TextFieldProps = Omit<FormFieldProps, "type"> & {
    type?: "number" | "text" | "email" | "password";
    lang?: string;
};

export const TextField: React.FC<TextFieldProps> = ({
    field,
    register,
    errors,
    lang,
}) => {
    const registerProps = register(field.name, getRegisterOptions(field));
    const dictionary: any = useDictionary();

    return (
        <TextInput
            type={field?.type as TextInputType}
            placeholder={`${dictionary.form_labels[field.name.split(".")[0]]}${
                lang ? ` (${lang})` : ""
            }`}
            className={`w-full ${errors[field.name] ? "input-error" : ""}`}
            {...registerProps}
        />
    );
};
