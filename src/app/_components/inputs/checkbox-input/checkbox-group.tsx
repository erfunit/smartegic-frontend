import React from "react";
import { CheckboxGroupProps } from "./checkbox-group.types";
import { CheckboxInput } from "./checkbox-input";

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    className,
    items,
    variant,
    inputProps,
}) => {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            {items?.map((option) => (
                <CheckboxInput
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
