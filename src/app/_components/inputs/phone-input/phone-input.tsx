"use client";

import React, { forwardRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import clsx from "clsx";
import "react-phone-number-input/style.css";
import { PhoneInputProps } from "./phone-input.types"; // Define your types

const PhoneNumberInput: React.FC<PhoneInputProps> = forwardRef<
    HTMLInputElement,
    PhoneInputProps
>(
    (
        {
            variant = "bordered",
            className,
            size = "normal",
            isDisabled,
            ...rest
        },
        ref,
    ) => {
        const [value, setValue] = useState<string | undefined>();

        const classes = clsx(
            "flex gap-2 items-center textinput",
            "w-full",
            {
                [`textinput-${variant}`]: !!variant,
                [`textinput-${size}`]: !!size,
            },
            className,
        );

        return (
            <div className={classes} dir="ltr">
                <PhoneInput
                    defaultCountry="IR"
                    disabled={isDisabled}
                    placeholder="Enter phone number"
                    value={value}
                    aria-label="phone number"
                    focusInputOnCountrySelection
                    className="w-full font-light"
                    {...rest}
                    ref={ref as any} // casting ref as any to satisfy the type requirement
                    onChange={setValue}
                />
            </div>
        );
    },
);

PhoneNumberInput.displayName = "PhoneNumberInput";

export default PhoneNumberInput;
