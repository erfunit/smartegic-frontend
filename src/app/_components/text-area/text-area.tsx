import clsx from "clsx";
import React, { forwardRef, ForwardedRef } from "react";
import { TextAreaProps } from "./text-area.types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        { placeholder, variant, size, className, isDisabled, rows, ...rest },
        ref: ForwardedRef<HTMLTextAreaElement>,
    ) => {
        const classes = clsx(
            "flex gap-2 items-center textinput",
            "w-full",
            {
                [`textareafield-${variant}`]: !!variant,
                [`textareafield-${size}`]: !!size,
                [`textareafield-disabled`]: !!isDisabled,
            },
            className,
        );

        return (
            <textarea
                aria-label={placeholder}
                ref={ref}
                rows={rows}
                className={classes}
                {...rest}
            ></textarea>
        );
    },
);

TextArea.displayName = "TextArea";

export default TextArea;
