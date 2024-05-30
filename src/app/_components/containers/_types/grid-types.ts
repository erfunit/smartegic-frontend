import React from "react";

export type ResponsiveSizes = "sm" | "md" | "lg" | "xl";

export type ResponsiveClasses = Partial<Record<ResponsiveSizes, number>>;

export type ResponsiveClassNames = ResponsiveClasses | string;

export type GridBoxProps = {
    children?: React.ReactNode;
    className?: string;
    cols?: ResponsiveClassNames;
    rows?: ResponsiveClassNames;
};

export type GridItemProps = {
    children?: React.ReactNode;
    className?: string;
    rowspan?: ResponsiveClassNames;
    colspan?: ResponsiveClassNames;
    back?: boolean;
};
