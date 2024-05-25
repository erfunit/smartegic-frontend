import { createData } from "@/core/http-service";
import { SignIn } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

// 💚 the helper function which is calling the CRUD features
const signIn = (model: SignIn): Promise<void> =>
    createData<SignIn, void>("/signin", model);

// 💚 react-query wrapper custom hook arguments
type UseSignInOptions = {
    onSuccess?: () => void;
};

// 💚 the react query wrapper custom hook
// it calls react query custom hooks inside, and returns some little features that we want.
export const useSignIn = ({ onSuccess }: UseSignInOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signIn,
        onSuccess,
    });

    return {
        submit,
        isPending,
    };
};
