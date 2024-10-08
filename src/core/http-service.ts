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

        if (statusCode && Object.hasOwn(httpErrors, statusCode)) {
            httpErrors[statusCode as keyof typeof httpErrors](
                axiosError,
                originalConfig.url!,
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
