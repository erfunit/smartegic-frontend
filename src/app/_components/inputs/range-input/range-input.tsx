"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";
import { RangeInputProps } from "./range-input.types";

const RangeInput: React.FC<RangeInputProps> = forwardRef<
    HTMLInputElement,
    RangeInputProps
>(({ className, min, max, variant, size, step, ...rest }, ref) => {
    const classes = clsx(
        "flex gap-2 items-center rangeinput",
        "w-full",
        {
            [`rangeinput-${variant}`]: !!variant,
            [`rangeinput-${size}`]: !!size,
        },
        className,
    );
    return (
        <input
            type="range"
            min={Number(min)}
            ref={ref}
            max={Number(max)}
            step={step}
            className={classes}
            {...rest}
        />
    );
});

export default RangeInput;
