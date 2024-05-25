import { useMutation } from "@tanstack/react-query";
import { updateData } from "@/core/http-service";

/**
 * Options for the useUpdateData custom hook.
 *
 * @typedef {Object} UseUpdateDataOptions
 * @property {function(): void} [onSuccess] - Callback function to execute on successful update.
 */
type UseUpdateDataOptions = {
    onSuccess?: () => void;
};

/**
 * Custom hook for updating data using react-query.
 *
 * This hook wraps the `useMutation` hook from react-query to provide update functionality.
 * It returns a `mutate` function to initiate the update process and an `isPending` boolean
 * to indicate the pending state of the request.
 *
 * @param {UseUpdateDataOptions} options - The options for the custom hook.
 * @returns {{
 *   mutate: function(string, TModel): void,
 *   isPending: boolean
 * }} - The update mutate function and pending state.
 */
export const useUpdateData = <TModel, TResult>({
    onSuccess,
}: UseUpdateDataOptions) => {
    const { mutate, isPending } = useMutation<
        TResult,
        unknown,
        { id: string; data: TModel }
    >({
        mutationFn: ({ id, data }: { id: string; data: TModel }) =>
            updateData<TModel, TResult>(`/delete/${id}`, data),
        onSuccess,
    });

    return {
        mutate,
        isPending,
    };
};
