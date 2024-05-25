import { createData } from "@/core/http-service";
import { SignIn } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

/**
 * Helper function for signing in.
 *
 * This function calls the `createData` function to send the sign-in data to the backend API.
 *
 * @param {SignIn} model - The sign-in data model.
 * @returns {Promise<void>} - A promise that resolves when the sign-in request is complete.
 */
const signIn = (model: SignIn): Promise<void> =>
    createData<SignIn, void>("/signin", model);

/**
 * Options for the useSignIn custom hook.
 *
 * @typedef {Object} UseSignInOptions
 * @property {function(): void} [onSuccess] - Callback function to execute on successful sign-in.
 */
type UseSignInOptions = {
    onSuccess?: () => void;
};

/**
 * Custom hook for handling sign-in using react-query.
 *
 * This hook wraps the `useMutation` hook from react-query to provide sign-in functionality.
 * It returns a `submit` function to initiate the sign-in process and an `isPending` boolean
 * to indicate the pending state of the request.
 *
 * @param {UseSignInOptions} options - The options for the custom hook.
 * @returns {{ submit: function(SignIn): void, isPending: boolean }} - The sign-in submit function and pending state.
 */
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
