import { InputHTMLAttributes } from "react";
import { ComponentBase } from "@/types/component-base.type";

export type TextInputType = "text" | "number" | "email" | "password";

export type TextInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
> &
    ComponentBase & {
        type?: TextInputType;
        name: string;
    };
