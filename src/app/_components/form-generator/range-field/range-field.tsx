import React from "react";
import { FormFieldProps } from "@/types/input-fields.type";
import RangeInput from "../../inputs/range-input/range-input";

export const RangeField = ({ field, register, errors }: FormFieldProps) => {
    const registerProps = register(field.name);

    return (
        <RangeInput
            min={field.min}
            max={field.max}
            step={field.step}
            {...registerProps}
            className={`range ${errors[field.name] ? "range-error" : ""}`}
        />
    );
};
