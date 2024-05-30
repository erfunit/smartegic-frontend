import clsx from "clsx";
import React from "react";

type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subTitle?: string;
};

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
    title,
    subTitle,
}) => {
    return (
        <div
            className={clsx(
                "w-full h-full flex flex-col mb-7 items-stretch gap-4",
                className,
            )}
        >
            <div className="space-y-1">
                {title && (
                    <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
                )}
                {subTitle && (
                    <h3 className="text-base lg:text-lg font-semibold opacity-90">
                        {subTitle}
                    </h3>
                )}
            </div>
            {children}
        </div>
    );
};
