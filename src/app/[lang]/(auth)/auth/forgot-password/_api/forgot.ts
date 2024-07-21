import { useMutation } from "@tanstack/react-query";
import { ForgotSchemaType } from "../_schema/forgot.schema";
import { createData } from "@/core/http-service";

const forgot = (model: ForgotSchemaType): Promise<void> =>
    createData<ForgotSchemaType, void>("/auth/forgot-password", model);

type UseForgotOptions = {
    onSuccess?: () => void;
};

export const useForgot = ({ onSuccess }: UseForgotOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: forgot,
        onSuccess,
    });

    return {
        submit,
        isPending,
    };
};
