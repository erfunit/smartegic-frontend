import { showToast } from "@/stores/toast.store";
import { AxiosError } from "axios";

const errorToast = (text: string) => {
    showToast([
        {
            message: text,
            type: "error",
        },
    ]);
};

const duplicateInitialData = (error: AxiosError, route?: string) => {
    errorToast("Email already exists.");
    throw {
        error,
        route,
    };
};

const dataNotFound = (error: AxiosError, route?: string) => {
    if (route && route === "/auth/login")
        errorToast("Incorrect email or password");
    throw {
        error,
    };
};

export const httpErrors = {
    409: duplicateInitialData,
    404: dataNotFound,
};
