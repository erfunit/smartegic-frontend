import clsx from "clsx";
import React from "react";

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
    children,
    className,
    htmlFor,
    ...rest
}) => {
    const classes = clsx("label", className);
    return (
        <label htmlFor={htmlFor} className={classes} {...rest}>
            <span className="label-text">{children}</span>
        </label>
    );
};
