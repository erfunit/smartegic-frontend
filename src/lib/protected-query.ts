import { AxiosError, AxiosRequestHeaders } from "axios";
import { redirect } from "next/navigation";
import { getAccessToken } from "./auth/get-session";

export default async function protectedQuery<T>(
    fetchFunction: (headers: AxiosRequestHeaders) => Promise<T>,
): Promise<T | undefined> {
    const token = await getAccessToken(true);
    if (!token) redirect("/auth/login");

    try {
        return await fetchFunction({
            Authorization: token as string,
        } as AxiosRequestHeaders);
    } catch (error) {
        const axiosError: AxiosError = error as AxiosError;
        if (axiosError?.response?.status === 401) redirect("/auth/login");
    }
}
