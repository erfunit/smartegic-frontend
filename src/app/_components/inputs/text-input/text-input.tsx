"use client";

import React, { forwardRef, useState } from "react";
import clsx from "clsx";
import { TextInputProps } from "./text-input.types";
import { PasswordToggle } from "./password-toggle";
import { getInputType } from "./get-input-type";

const TextInput: React.FC<TextInputProps> = forwardRef<
    HTMLInputElement,
    TextInputProps
>(
    (
        {
            variant = "bordered",
            type = "text",
            className,
            startElement = null,
            endElement = null,
            size = "normal",
            ...rest
        },
        ref,
    ) => {
        const [show, setShow] = useState(false);

        const classes = clsx(
            "flex gap-2 items-center textinput",
            {
                [`textinput-${variant}`]: !!variant,
                [`textinput-${size}`]: !!size,
            },
            className,
        );

        return (
            <div className={classes}>
                {startElement}
                <input
                    type={getInputType(type, show)}
                    aria-label="text"
                    className="w-full font-light"
                    {...rest}
                    ref={ref}
                />
                {type === "password" && <PasswordToggle setShow={setShow} />}
                {endElement}
            </div>
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
