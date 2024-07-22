import { ComponentBase } from "@/types/component-base.type";
import { InputHTMLAttributes } from "react";

export type FileInputProps = InputHTMLAttributes<HTMLInputElement> &
    ComponentBase & {
        acceptFormat?: string;
        onChange?: (file: File[]) => void;
    };
