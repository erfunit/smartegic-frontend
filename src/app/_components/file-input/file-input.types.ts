import { ComponentBase } from "@/types/component-base.type";
import { HTMLAttributes } from "react";

export type FileInputProps = HTMLAttributes<HTMLInputElement> &
    ComponentBase & {
        acceptFormat?: string;
    };
