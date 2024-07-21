import { readData } from "@/core/http-service";
import { UserInfo } from "@/types/user-info.type";
import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { getAccessToken } from "./get-session";

export default async function getMe(): Promise<UserInfo> {
    console.log("GET ME CALLING .......................");
    const token = await getAccessToken(true);
    if (!token) throw new Error("No access token found");

    const response: AxiosResponse<UserInfo> = await readData("/auth/me", {
        Authorization: token as string,
    } as AxiosRequestHeaders);
    return response.data;
}
