import React from "react";
import { useDeleteOrder } from "../_api/remove-item";

const OrderList = () => {
    /**
     * Handler for deleting an order.
     *
     * The `useDeleteOrder` hook is used to handle the deletion of an order.
     * It accepts an `onSuccess` callback which is called when the deletion is successful.
     *
     * @type {ReturnType<typeof useDeleteOrder>}
     */
    const deleteHandler = useDeleteOrder({
        /**
         * Callback function executed when the order is successfully deleted.
         *
         * @function
         */
        onSuccess: () => console.log("item deleted"),
    });

    return (
        <div>
            <div>
                <span>item `1` title</span>
                <button type="button" onClick={() => deleteHandler.mutate("1")}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default OrderList;
