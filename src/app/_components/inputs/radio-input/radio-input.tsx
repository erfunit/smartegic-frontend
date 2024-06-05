import clsx from "clsx";
import React, { forwardRef } from "react";
import { RadioInputProps } from "./radio-input.types";

export const RadioInput: React.FC<RadioInputProps> = forwardRef<
    HTMLInputElement,
    RadioInputProps
>(({ className, option, size, variant, ...rest }, ref) => {
    const classes = clsx(
        "radioinput",
        className,
        {
            [`radioinput-${variant}`]: !!variant,
            [`radioinput-${size}`]: !!size,
        },
        className,
    );
    return (
        <label
            key={option}
            className="radioinput-label flex items-center gap-2 text-sm"
        >
            <input
                type="radio"
                ref={ref}
                value={option}
                {...rest}
                className={classes}
            />
            {option}
        </label>
    );
});
