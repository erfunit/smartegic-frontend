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
    back = true,
}) => {
    const colClasses = generateResponsiveClasses(colspan, "col-span");
    const rowClasses = generateResponsiveClasses(rowspan, "row-span");

    const classes = clsx(
        "w-full h-full rounded-md",
        className,
        colClasses,
        rowClasses,
        {
            "bg-base-100 border border-base-300": back,
            "bg-transparent": !back,
        },
    );

    return <div className={classes}>{children}</div>;
};
