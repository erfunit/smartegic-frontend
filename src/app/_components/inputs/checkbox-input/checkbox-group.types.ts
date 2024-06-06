import { ComponentBase } from "@/types/component-base.type";
import { Size } from "@/types/size.type";
import { CheckboxInputProps } from "./checkbox-input.types";

export type CheckboxGroupProps = ComponentBase & {
    items?: string[];
    size?: Size;
    inputProps?: CheckboxInputProps;
};
