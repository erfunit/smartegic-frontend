import { deleteData } from "@/core/http-service";
import { useMutation } from "@tanstack/react-query";

/**
 * Helper function for deleting an order.
 *
 * This function calls the `deleteData` function to send a delete request to the backend API.
 * It accepts an order ID as its parameter.
 *
 * @param {string} id - The ID of the order to delete.
 * @returns {Promise<void>} - A promise that resolves when the delete request is complete.
 */
const deleteOrder = (id: string): Promise<void> => deleteData(`/orders/${id}`);

/**
 * Options for the useDeleteOrder custom hook.
 *
 * @typedef {Object} UseDeleteOrderOptions
 * @property {function(): void} [onSuccess] - Callback function to execute on successful deletion.
 */
type UseDeleteOrderOptions = {
    onSuccess?: () => void;
};

/**
 * Custom hook for deleting an order using react-query.
 *
 * This hook wraps the `useMutation` hook from react-query to provide delete functionality.
 * It returns a `mutate` function to initiate the delete process and an `isPending` boolean
 * to indicate the pending state of the request.
 *
 * @param {UseDeleteOrderOptions} options - The options for the custom hook.
 * @returns {{ mutate: function(string): void, isPending: boolean }} - The delete mutate function and pending state.
 */
export const useDeleteOrder = ({ onSuccess }: UseDeleteOrderOptions) => {
    const { mutate, isPending } = useMutation({
        mutationFn: (id: string) => deleteOrder(id),
        onSuccess,
    });

    return {
        mutate,
        isPending,
    };
};
