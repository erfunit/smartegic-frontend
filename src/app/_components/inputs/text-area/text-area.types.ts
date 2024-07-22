import { ComponentBase } from "@/types/component-base.type";
import { TextareaHTMLAttributes } from "react";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
    ComponentBase & {
        rows?: number;
    };
