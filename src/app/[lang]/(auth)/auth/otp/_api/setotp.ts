import { useMutation } from "@tanstack/react-query";
import { RegisterSchemaType } from "../_schema/setotp.types";
import { createData } from "@/core/http-service";

const setotp = async (
    model: RegisterSchemaType & { email: string | null },
): Promise<void> => {
    delete model.confirmPassword;
    await createData<Omit<RegisterSchemaType, "confirmPassword">, void>(
        "/auth/register",
        model,
    );
};

type UseSetotpOptions = {
    onSuccess?: () => void;
};

export const useSetotp = ({ onSuccess }: UseSetotpOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: setotp,
        onSuccess,
    });

    return {
        submit,
        isPending,
    };
};
