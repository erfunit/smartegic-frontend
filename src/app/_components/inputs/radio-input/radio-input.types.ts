import { ComponentBase } from "@/types/component-base.type";
import { InputHTMLAttributes } from "react";

export type RadioInputProps = InputHTMLAttributes<HTMLInputElement> &
    ComponentBase & {
        option?: string;
    };
