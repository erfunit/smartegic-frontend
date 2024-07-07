"use client";

import React from "react";
import { ReactNode } from "react";
import {
    IconCheck,
    IconClose,
    IconErrorIcon,
    IconInfo,
} from "@/components/icons";
import { useToastStore } from "@/stores/toast.store";
import { ToastType } from "@/types/toast.interface";
import { ToastItemProps } from "./toast.types";

const notificationIcons: Record<ToastType, ReactNode> = {
    success: <IconCheck width={20} height={20} color="black" />,
    info: <IconInfo width={20} height={20} color="black" />,
    warning: <IconInfo width={20} height={20} color="black" />,
    error: <IconErrorIcon width={20} height={20} color="black" />,
};

export const ToastItem: React.FC<ToastItemProps> = ({
    notification: { id, message, type },
}) => {
    const dismissToast = useToastStore((state) => state.dismissToast);

    return (
        <div
            className={`toaster toaster-${type} gap-3`}
            style={{
                display: "flex",
            }}
        >
            <div className={``}>{notificationIcons[type]} </div>
            <div>{message}</div>
            <button
                aria-label="dismisss notification"
                className="mr-auto hover:text-white"
                onClick={() => dismissToast(id)}
            >
                <IconClose width={20} height={20} />
            </button>
        </div>
    );
};
