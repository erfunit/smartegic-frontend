import React from "react";
import { FormField } from "@/types/form-generator.type";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { TextField } from "../text-field";
import { CheckboxField } from "../checkbox-field";
import { Dropdown } from "../dropdown";
import { ListField } from "../list-field/list-field";
import { DictField } from "../dict-field/dict-field";
import PhoneNumberInput from "../../inputs/phone-input/phone-input";
import { ClassField } from "../class-field/class-field";

export const renderField = (
    field: FormField,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    lang: string | null,
): React.JSX.Element | null => {
    if (field.multiple) {
        return (
            <ListField
                key={field.name}
                field={field}
                register={register}
                errors={errors}
            />
        );
    }

    switch (field.type) {
        case "bool":
            return (
                <CheckboxField
                    key={field.name}
                    field={{ ...field, options: [field.description!] }}
                    register={register}
                    errors={errors}
                />
            );
        case "MultilingualString":
            return (
                <TextField
                    field={{
                        ...field,
                        name: `${field.name}.${lang}`,
                    }}
                    register={register}
                    errors={errors}
                />
            );

        case "Phone":
            return (
                <PhoneNumberInput
                    onChange={() => false}
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "Enum":
            return (
                <Dropdown
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "Dict":
            return (
                <DictField
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "Class":
            return (
                <ClassField
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "Link":
            return (
                <Dropdown
                    to={field.to}
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
        case "int":
        case "str":
        default:
            return (
                <TextField
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                />
            );
    }
};
