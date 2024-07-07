import React from "react";

export const FieldError: React.FC = ({ children }) => {
    return (
        <span className="mt-2 inline-block text-sm font-light text-red-500">
            {children}
        </span>
    );
};
