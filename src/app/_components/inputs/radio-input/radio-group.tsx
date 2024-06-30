import React from "react";
import { RadioGroupProps } from "./radio-group.types";
import { RadioInput } from "./radio-input";

export const RadioGroup: React.FC<RadioGroupProps> = ({
    className,
    items,
    variant,
    inputProps,
}) => {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            {items?.map((option) => (
                <RadioInput
                    variant={variant}
                    className={className}
                    key={option}
                    option={option}
                    {...inputProps}
                />
            ))}
        </div>
    );
};
