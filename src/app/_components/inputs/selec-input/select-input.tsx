import clsx from "clsx";
import React, { forwardRef } from "react";
import { SelectInputProps } from "./select-input.types";

export const SelectInput: React.FC<SelectInputProps> = forwardRef<
    HTMLSelectElement,
    SelectInputProps
>(({ className, items, size, variant, ...rest }, ref) => {
    const classes = clsx(
        "selectinput",
        className,
        {
            [`selectinput-${variant}`]: !!variant,
            [`selectinput-${size}`]: !!size,
        },
        className,
    );
    return (
        <select ref={ref} className={classes} {...rest}>
            <option value="">Select...</option>
            {items?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
});
