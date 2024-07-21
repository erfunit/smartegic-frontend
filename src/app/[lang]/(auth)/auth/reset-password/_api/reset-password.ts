import { useMutation } from "@tanstack/react-query";
import { ResetPasswordSchemaType } from "../_schema/reset-password.schema";
import { createData } from "@/core/http-service";

const resetPassword = async (
    model: ResetPasswordSchemaType & { email: string | null },
): Promise<void> => {
    delete model.confirmPassword;
    await createData<Omit<ResetPasswordSchemaType, "confirmPassword">, void>(
        "/auth/reset-password",
        model,
    );
};

type UseResetPasswordOptions = {
    onSuccess?: () => void;
};

export const useResetPassword = ({ onSuccess }: UseResetPasswordOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: resetPassword,
        onSuccess,
    });

    return {
        submit,
        isPending,
    };
};
