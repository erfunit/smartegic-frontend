"use client";

import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { TextInputProps } from "./text-input.types";
import { IconHide, IconShow } from "../icons/icons";

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
            "flex gap-2 items-center input",
            "w-full",
            {
                [`input-${variant}`]: variant,
                [`input-${size}`]: size,
            },
            className,
        );

        return (
            <div className={classes}>
                <input
                    type={
                        type === "password" && !show
                            ? "password"
                            : (type === "password" && "text") || type
                    }
                    ref={ref}
                    aria-label="text"
                    className="w-full font-light"
                    {...rest}
                />
                {type === "password" && (
                    <label className="swap">
                        <input
                            aria-label="switch"
                            type="checkbox"
                            onClick={() => setShow((pre) => !pre)}
                        />
                        <div className="swap-off">
                            <IconShow />
                        </div>
                        <div className="swap-on">
                            <IconHide />
                        </div>
                    </label>
                )}
            </div>
        );
    },
);

export default TextInput;
