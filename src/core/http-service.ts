import { API_URL } from "@/configs/global";
import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios";
import { httpErrors } from "./http-errors";

const httpService = axios.create({
    baseURL: API_URL,
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

        const url: string | undefined = axiosError.config?.url;
        if (Object.hasOwn(httpErrors, statusCode || 0))
            httpErrors[statusCode as keyof typeof httpErrors](axiosError, url);

        return Promise.reject(error);
    },
);

async function apiBase<T>(
    url: string,
    options?: AxiosRequestConfig,
): Promise<T> {
    const response: AxiosResponse = await httpService(url, options);
    return response.data as T;
}

async function readData<T>(
    url: string,
    headers?: AxiosRequestHeaders,
): Promise<T> {
    const options: AxiosRequestConfig = {
        headers,
        method: "GET",
    };
    return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders,
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: "POST",
        headers,
        data: JSON.stringify(data),
    };

    return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(
    url: string,
    data: TModel,
    headers?: AxiosRequestHeaders,
): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: "PUT",
        headers,
        data: JSON.stringify(data),
    };

    return await apiBase<TResult>(url, options);
}

async function deleteData(
    url: string,
    headers?: AxiosRequestHeaders,
): Promise<void> {
    const options: AxiosRequestConfig = {
        method: "DELETE",
        headers,
    };

    return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData };
