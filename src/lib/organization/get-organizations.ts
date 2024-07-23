import { readData } from "@/core/http-service";
import { AxiosRequestHeaders } from "axios";
import protectedQuery from "../protected-query";

export default async function getOrganizations(
    id?: string,
): Promise<any | undefined> {
    return protectedQuery(async function (headers: AxiosRequestHeaders) {
        const response = await readData<{ data: any }>(
            `/organizations${id ? `/${id}` : ""}`,
            headers,
        );
        return response.data;
    });
}
