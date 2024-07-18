import { readData } from "@/core/http-service";
import { UserInfo } from "@/types/user-info.type";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { getAccessToken } from "./getSession";

export default async function getMe(): Promise<UserInfo> {
    const response: AxiosResponse = await readData("/auth/me", {
        Authorization: getAccessToken(true),
    } as AxiosRequestHeaders);
    return response.data;
}
