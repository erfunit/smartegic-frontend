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
    languages: string[] = ["en", "fa"],
): React.JSX.Element | null => {
    if (field.multiple) {
        return (
            <ListField
                key={field.name}
                field={field}
                register={register}
                errors={errors}
                languages={languages}
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
                <div className="flex gap-3 flex-col md:flex-row items-center justify-center">
                    {languages.map((lang) => (
                        <TextField
                            key={lang}
                            field={{
                                ...field,
                                name: field.name,
                                description: `${field.description} (${lang})`,
                            }}
                            register={register}
                            errors={errors}
                        />
                    ))}
                </div>
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
                    languages={languages}
                />
            );
        case "Class":
            return (
                <ClassField
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                    languages={languages}
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
