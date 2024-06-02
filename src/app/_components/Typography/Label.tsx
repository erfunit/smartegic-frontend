import React from "react";

export const Label: React.FC = ({ children }) => {
    return (
        <label className="label">
            <span className="label-text">{children}</span>
        </label>
    );
};
