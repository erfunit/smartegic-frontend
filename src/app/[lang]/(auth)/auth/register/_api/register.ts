import { useMutation } from "@tanstack/react-query";
import { RegisterSchemaType } from "../_schema/register.type";
import { createData } from "@/core/http-service";

const register = (model: RegisterSchemaType): Promise<void> =>
    createData<RegisterSchemaType, void>("/auth/setotp", model);

type UseRegisterOptions = {
    onSuccess?: () => void;
};

export const useRegister = ({ onSuccess }: UseRegisterOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: register,
        onSuccess,
    });

    return {
        submit,
        isPending,
    };
};
