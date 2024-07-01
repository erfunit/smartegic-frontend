import { useModalContext } from "@/context/confirm-context";
import React from "react";
import { Button } from "../button";

interface ConfirmationModalProps {
    message: string;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    message,
    onConfirm,
}) => {
    const { hideModal } = useModalContext();

    return (
        <dialog id="confirmation_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirmation</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    <Button variant="default" onClick={hideModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        OK
                    </Button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmationModal;
