import { readData } from "@/core/http-service";
import { UserInfo } from "@/types/user-info.type";
import { AxiosRequestHeaders } from "axios";
import protectedQuery from "../protected-query";

export default async function getMe(): Promise<UserInfo | undefined> {
    return protectedQuery(async function (headers: AxiosRequestHeaders) {
        const response = await readData<{ data: UserInfo }>(
            "/auth/me",
            headers,
        );
        return response.data;
    });
}
