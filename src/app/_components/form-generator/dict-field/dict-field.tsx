import React from "react";
import { FormField } from "@/types/form-generator.type";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import { TextField } from "../text-field";
import { renderField } from "../lib/render-fields";
import { IconClose, IconPlus } from "../../icons";
import { Button } from "../../button";

interface DictFieldProps {
    field: FormField;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

export const DictField: React.FC<DictFieldProps> = ({
    field,
    register,
    errors,
}) => {
    const [items, setItems] = React.useState([...(field.default || [{}])]);

    const addItem = () => {
        setItems([...items, {}]);
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-2">
            <label>{field.description}</label>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <TextField
                        field={{
                            ...field.key,
                            name: `${field.name}[${index}].key`,
                            type: "str",
                            default: "",
                            required: field.required,
                            description: field.description,
                        }}
                        type={field.type === "str" ? "text" : "number"}
                        register={register}
                        errors={errors}
                    />
                    {renderField(
                        {
                            ...(field.value as FormField),
                            name: `${field.name}[${index}].value`,
                        },
                        register,
                        errors,
                    )}
                    <Button
                        variant="error"
                        shape="square"
                        aria-label="delete item"
                        type="button"
                        onClick={() => removeItem(index)}
                    >
                        <IconClose />
                    </Button>
                </div>
            ))}
            <Button
                variant="primary"
                // shape="square"
                aria-label="add item"
                type="button"
                onClick={addItem}
            >
                Add Item
                <IconPlus />
            </Button>
        </div>
    );
};
