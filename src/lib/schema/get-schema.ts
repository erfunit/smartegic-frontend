import { readData } from "@/core/http-service";
import { AxiosRequestHeaders } from "axios";
import protectedQuery from "../protected-query";
import { FormSchema } from "@/types/form-generator.type";

export default async function getFormSchema(
    model: string,
): Promise<FormSchema | undefined> {
    return protectedQuery(async function (headers: AxiosRequestHeaders) {
        const response = await readData<{ data: FormSchema }>(
            `/model/${model}`,
            headers,
        );
        return response.data;
    });
}
