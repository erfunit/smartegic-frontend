import clsx from "clsx";
import React from "react";
import { GridBoxProps, ResponsiveClassNames } from "./_types/grid-types";

const generateResponsiveClasses = (
    responsive: ResponsiveClassNames | undefined,
    prefix: "grid-cols" | "grid-rows",
) => {
    if (!responsive) return "";
    if (typeof responsive === "string") {
        return `${prefix}-${responsive}`;
    }
    return Object.entries(responsive)
        .map(([key, value]) => `${key}:${prefix}-${value}`)
        .join(" ");
};

export const GridBox: React.FC<GridBoxProps> = ({
    children,
    className,
    cols,
    rows,
}) => {
    const colClasses = generateResponsiveClasses(cols, "grid-cols");
    const rowClasses = generateResponsiveClasses(rows, "grid-rows");

    const classes = clsx(
        "grid gap-4 h-full",
        className,
        colClasses,
        rowClasses,
    );

    return <div className={classes}>{children}</div>;
};
