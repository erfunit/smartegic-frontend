import { FormSchema } from "@/types/form-generator.type";

export const getFormSchema = async (): Promise<FormSchema> => {
    const schema = import("../../../../../form_sample2.json").then(
        (res) => res.data,
    );
    return schema as Promise<FormSchema>;
};
