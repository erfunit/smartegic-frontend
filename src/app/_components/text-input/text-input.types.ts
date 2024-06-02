import React, { InputHTMLAttributes } from "react";
import { ComponentBase } from "@/types/component-base.type";

export type TextInputType = "text" | "number" | "email" | "password";

export type TextInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
> &
    ComponentBase & {
        type?: TextInputType;
        setValue: (name: string, value: any, config?: object) => void;
        name: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
