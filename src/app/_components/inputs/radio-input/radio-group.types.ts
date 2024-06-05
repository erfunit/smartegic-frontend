import { ComponentBase } from "@/types/component-base.type";
import { Size } from "@/types/size.type";
import { RadioInputProps } from "./radio-input.types";

export type RadioGroupProps = ComponentBase & {
    items?: string[];
    size?: Size;
    inputProps?: RadioInputProps;
};
