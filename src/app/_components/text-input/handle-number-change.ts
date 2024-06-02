import React from "react";

export const handleNumberInputChange = (
    value: string,
    setInputValue: (value: string) => void,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    e: React.ChangeEvent<HTMLInputElement>,
) => {
    if (value === "" || /^[1-9][0-9]*$/.test(value)) {
        setInputValue(value);
        if (onChange) {
            onChange(e);
        }
    } else if (value === "0") {
        setInputValue("0");
    } else {
        const newValue = value.replace(/^[0]/, "");
        setInputValue(newValue);
    }
};
