import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios";
import { httpErrors } from "./http-errors";

const httpService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

httpService.interceptors.response.use(
    (response) => response,
    async (error) => {
        const axiosError: AxiosError = error as AxiosError;
        const statusCode: number | undefined = axiosError.response?.status;
        const originalConfig = axiosError.config as AxiosRequestConfig & {
            _retry?: boolean;
        };

        // if (statusCode === 401 && !originalConfig["_retry"]) {
        //     originalConfig["_retry"] = true;
        //     try {
        //         const refreshToken = cookies().get("refresh-token")?.value;
        //         const {
        //             data,
        //         }: AxiosResponse<{
        //             data: { access_token: string; refresh_token: string };
        //         }> = await axios.post(
        //             `${process.env.API_URL}/auth/refresh`,
        //             { token: refreshToken },
        //             { withCredentials: true },
        //         );

        //         if (data) {
        //             const newAccessToken = data.data.access_token;
        //             const newRefreshToken = data.data.refresh_token;

        //             // Update cookies here by calling a server action
        //             await saveSession(newAccessToken, newRefreshToken);

        //             originalConfig.headers![
        //                 "Authorization"
        //             ] = `Bearer ${newAccessToken}`;
        //             return httpService(originalConfig);
        //         }
        //     } catch (refreshError) {
        //         const refreshTokenError: AxiosError =
        //             refreshError as AxiosError;
        //         if (refreshTokenError.response?.status === 403) {
        //             await removeSession();
        //             if (typeof window !== "undefined") {
        //                 window.location.href = "/auth/login";
        //             }
        //         }
        //     }
        // }

        if (statusCode && Object.hasOwn(httpErrors, statusCode)) {
            httpErrors[statusCode as keyof typeof httpErrors](
                axiosError,
                originalConfig.url,
            );
        }

        return Promise.reject(error);
    },
);

async function apiBase<T>(
    url: string,
    options?: AxiosRequestConfig,
): Promise<T> {
    const response: AxiosResponse<T> = await httpService(url, options);
    return response.data;
}

async function readData<T>(
    url: string,
    headers?: AxiosRequestHeaders,
): Promise<T> {
    return apiBase<T>(url, { headers, method: "GET" });
}

async function createData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders,
): Promise<TResult> {
    return apiBase<TResult>(url, {
        method: "POST",
        headers,
        data: JSON.stringify(data),
    });
}

async function updateData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders,
): Promise<TResult> {
    return apiBase<TResult>(url, {
        method: "PUT",
        headers,
        data: JSON.stringify(data),
    });
}

async function deleteData(
    url: string,
    headers?: AxiosRequestHeaders,
): Promise<void> {
    return apiBase(url, { method: "DELETE", headers });
}

export { createData, readData, updateData, deleteData };
