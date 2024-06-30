import React from "react";

type AuthFormTitleProps = {
    title: string;
    subTitle?: string;
};

export const AuthFormTitle: React.FC<AuthFormTitleProps> = ({
    title,
    subTitle = `Seamless Access, Secure Connection: Your Gateway to a
                Personalized Experience.`,
}) => {
    return (
        <>
            <h3 className="mt-12 text-center text-xl font-semibold lg:mt-24">
                {title}
            </h3>
            <h3 className="mt-2 text-center text-sm text-base-content/70">
                {subTitle}
            </h3>
        </>
    );
};
