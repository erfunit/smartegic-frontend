"use client";

import React, { forwardRef, useState /*, useEffect*/ } from "react";
import clsx from "clsx";
import { TextInputProps } from "./text-input.types";
import { PasswordToggle } from "./password-toggle";
// import { handleNumberInputChange } from "./handle-number-change";
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
            size = "normal",
            // name,
            // value,
            // setValue,
            // onChange,
            ...rest
        },
        ref,
    ) => {
        const [show, setShow] = useState(false);
        // const [inputValue, setInputValue] = useState(value);

        // useEffect(() => {
        //     setInputValue(() => value);
        //     setValue(name, value);
        //     console.log({ name, value });
        // }, [value]);

        // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //     const { value } = e.target;
        //     if (type === "number") {
        //         handleNumberInputChange(
        //             value,
        //             setInputValue,
        //             name,
        //             onChange,
        //             e,
        //         );
        //     } else {
        //         setInputValue(value);
        //         if (onChange) {
        //             onChange(e);
        //         }
        //     }
        // };

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
            <div className={classes}>
                <input
                    type={getInputType(type, show)}
                    ref={ref}
                    aria-label="text"
                    className="w-full font-light"
                    // value={inputValue}
                    // onChange={handleInputChange}
                    {...rest}
                />
                {type === "password" && <PasswordToggle setShow={setShow} />}
            </div>
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
