"use client";

import React, { forwardRef, useState } from "react";
import clsx from "clsx";
import { TextInputProps, TextInputType } from "./text-input.types";
import { PasswordToggle } from "./password-toggle";
import { getInputType } from "./get-input-type";
import { IconKey, IconMail } from "../../icons";

const inputIcons: Record<TextInputType, React.ReactNode> = {
    email: <IconMail width={19} height={19} />,
    number: null,
    password: <IconKey width={19} height={19} />,
    text: null,
};

const TextInput: React.FC<TextInputProps> = forwardRef<
    HTMLInputElement,
    TextInputProps
>(
    (
        {
            variant = "bordered",
            type = "text",
            className,
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
                {inputIcons[type]}
                <input
                    type={getInputType(type, show)}
                    aria-label="text"
                    className="w-full font-light"
                    {...rest}
                    ref={ref}
                />
                {type === "password" && <PasswordToggle setShow={setShow} />}
            </div>
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
