import clsx from "clsx";
import React, { forwardRef } from "react";
import { CheckboxInputProps } from "./checkbox-input.types";

export const CheckboxInput: React.FC<CheckboxInputProps> = forwardRef<
    HTMLInputElement,
    CheckboxInputProps
>(({ className, option, size, variant, ...rest }, ref) => {
    const classes = clsx(
        "checkboxinput",
        className,
        {
            [`checkboxinput-${variant}`]: !!variant,
            [`checkboxinput-${size}`]: !!size,
        },
        className,
    );
    return (
        <label
            key={option}
            className="checkboxinput-label flex items-center gap-2 text-sm"
        >
            <input
                type="checkbox"
                ref={ref}
                value={option}
                {...rest}
                className={classes}
            />
            {option}
        </label>
    );
});
