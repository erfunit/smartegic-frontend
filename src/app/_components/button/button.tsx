import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ButtonProps, ButtonShape } from "./button.types";
import clsx from "clsx";
import Link from "next/link";

const shapeClasses: Record<ButtonShape, `button-${ButtonShape}` | ""> = {
    wide: "button-wide",
    block: "button-block",
    square: "button-square",
    circle: "button-circle",
    default: "",
};

export const Button: React.FC<ButtonProps> = ({
    variant = "default",
    size = "md",
    isDisabled = false,
    isOutline = false,
    shape = "default",
    isLoading = false,
    type = "button",
    isLink = false,
    href = "#",
    children,
    className,
    ...rest
}) => {
    const classes = clsx(
        "button",
        { [`button-${variant}`]: variant !== "default" },
        { [`button-${size}`]: size },
        { "button-outline": isOutline },
        { "button-link p-0 w-fit": isLink },
        { [`${shapeClasses[shape]}`]: shape },
        { "pointer-events-none opacity-80": isLoading },
        className,
    );

    if (isLink) {
        // Use only AnchorHTMLAttributes for Link
        const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <Link
                href={href}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 1}
                className={classes}
                {...linkProps}
            >
                {children}
            </Link>
        );
    }

    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={classes}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
