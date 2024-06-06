import { ComponentBase } from "@/types/component-base.type";
import { InputHTMLAttributes } from "react";

export type CheckboxInputProps = InputHTMLAttributes<HTMLInputElement> &
    ComponentBase & {
        option?: string;
    };
