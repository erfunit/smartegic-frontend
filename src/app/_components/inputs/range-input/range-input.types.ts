import { InputHTMLAttributes } from "react";
import { ComponentBase } from "@/types/component-base.type";

export type RangeInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
> &
    ComponentBase & {
        min?: number | string;
        max?: number | string;
        step?: number;
    };
