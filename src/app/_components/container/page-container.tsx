import clsx from "clsx";
import React from "react";

type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={clsx(
                "w-full h-full flex flex-col items-stretch gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};
