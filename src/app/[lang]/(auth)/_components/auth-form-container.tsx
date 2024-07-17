import React from "react";

export const AuthFormContainer: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <div className="mt-10">{children}</div>;
};
