import { API_URL } from "@/configs/global";
import { showToast } from "@/stores/toast.store";

import axios, {
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from "axios";

const httpService = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

httpService.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.data.error[0].type === "UserAlreadyExist") {
            showToast([
                {
                    message: "this email already exists",
                    type: "error",
                },
            ]);
        }
        throw {
            error,
        };
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
