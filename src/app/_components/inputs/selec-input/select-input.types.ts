import { ComponentBase } from "@/types/component-base.type";
import { SelectHTMLAttributes } from "react";

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> &
    ComponentBase & {
        items?: string[];
    };
