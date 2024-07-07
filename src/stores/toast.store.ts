import { generateID } from "@/lib/generate-id";
import { Toast } from "@/types/toast.interface";
import { create } from "zustand";

type ToastState = {
    toasts: Toast[];
    showToast: (toast: Omit<Toast, "id">) => void;
    dismissToast: (id: string) => void;
};

export const useToastStore = create<ToastState>((set, get) => ({
    toasts: [],
    showToast: (toast) => {
        const duration = toast.duration || 4000;
        const id = generateID();
        set((state) => ({
            toasts: [
                ...state.toasts,
                {
                    id,
                    ...toast,
                    duration: duration,
                },
            ],
        }));

        setTimeout(() => {
            get().dismissToast(id);
        }, duration);
    },
    dismissToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((p) => p.id !== id),
        }));
    },
}));

export const showToast = (notifications: Omit<Toast, "id">[]) => {
    notifications.forEach((p) => useToastStore.getState().showToast(p));
};
