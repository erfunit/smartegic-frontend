import clsx from "clsx";
import React from "react";
import { GridItemProps, ResponsiveClassNames } from "./_types/grid-types";

const generateResponsiveClasses = (
    responsive: ResponsiveClassNames | undefined,
    prefix: "col-span" | "row-span",
) => {
    if (!responsive) return "";
    if (typeof responsive === "string") {
        return `${prefix}-${responsive}`;
    }
    return Object.entries(responsive)
        .map(([key, value]) => `${key}:${prefix}-${value}`)
        .join(" ");
};

export const GridItem: React.FC<GridItemProps> = ({
    children,
    className,
    rowspan,
    colspan,
}) => {
    const colClasses = generateResponsiveClasses(colspan, "col-span");
    const rowClasses = generateResponsiveClasses(rowspan, "row-span");

    const classes = clsx(
        "w-full h-full bg-white border rounded-md",
        className,
        colClasses,
        rowClasses,
    );

    return <div className={classes}>{children}</div>;
};
