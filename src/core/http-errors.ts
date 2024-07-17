import { showToast } from "@/stores/toast.store";

const DuplicateInitialData = () => {
    showToast([
        {
            message: "Email already exists.",
            type: "error",
        },
    ]);
};

export const httpErrors = {
    409: DuplicateInitialData,
};
