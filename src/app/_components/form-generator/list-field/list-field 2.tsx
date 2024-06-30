import React from "react";
import { FormField } from "@/types/form-generator.type";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { renderField } from "../lib/render-fields";
import { IconClose, IconPlus } from "../../icons";

interface ListFieldProps {
    field: FormField;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    languages: string[];
}

export const ListField: React.FC<ListFieldProps> = ({
    field,
    register,
    errors,
    languages,
}) => {
    const [items, setItems] = React.useState([...(field.default || [{}])]);

    const addItem = () => {
        setItems([...items, {}]);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <label>{field.description}</label>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {renderField(
                        {
                            ...field,
                            multiple: false,
                            name: `${field.name}[${index}]`,
                        },
                        register,
                        errors,
                        languages,
                    )}
                    <button
                        aria-label="delete item"
                        type="button"
                        onClick={() => removeItem(index)}
                    >
                        <IconClose />
                    </button>
                </div>
            ))}
            <button type="button" aria-label="add item" onClick={addItem}>
                <IconPlus />
            </button>
        </div>
    );
};
