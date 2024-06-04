import { ComponentBase } from "@/types/component-base.type";
import { HTMLAttributes } from "react";

export type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> &
    ComponentBase & {
        rows?: number;
    };
