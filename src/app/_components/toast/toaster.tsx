"use client";

import React from "react";
import { ToastItem } from "./toast-item";
import { ToasterProps } from "./toast.types";
import { useToastStore } from "@/stores/toast.store";

export const Toaster: React.FC<ToasterProps> = () => {
    const toasts = useToastStore((state) => state.toasts);
    if (toasts.length < 1) return null;

    return (
        <div className="toast toast-bottom toast-end end-4 z-[8000]">
            {toasts.map((p) => (
                <ToastItem key={`notification-${p.id}`} notification={p} />
            ))}
        </div>
    );
};
