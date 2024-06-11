export interface Toast {
    id: string;
    duration?: number;
    message: string;
    type: ToastType;
}

export type ToastType = "success" | "error" | "info" | "warning";
