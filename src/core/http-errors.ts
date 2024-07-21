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

const duplitcateException = (error: AxiosError, route?: string) => {
    errorToast("Email already exists.");
    throw {
        error,
        route,
    };
};

const notfoundException = (error: AxiosError, route?: string) => {
    if (route && route === "/auth/login")
        errorToast("Incorrect email or password");
    throw {
        error,
    };
};

// const unauthorizedException = async (error: AxiosError, route: string) => {
//     const response = fetch(`${API_ROUTES_BASE_URL}/refresh-token`);

// };

export const httpErrors = {
    409: duplitcateException,
    404: notfoundException,
    // 401: unauthorizedException,
};
