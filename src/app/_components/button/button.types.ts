import { ComponentBase } from "@/types/component-base.type";
import { ButtonVariants } from "@/types/variant.type";
import { ButtonHTMLAttributes } from "react";

export type ButtonShape = "default" | "wide" | "block" | "square" | "circle";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    Omit<ComponentBase, "variant"> & { variant: ButtonVariants } & {
        isOutline?: boolean;
        isLink?: boolean;
        isLoading?: boolean;
        href?: string;
        shape?: ButtonShape;
    };
