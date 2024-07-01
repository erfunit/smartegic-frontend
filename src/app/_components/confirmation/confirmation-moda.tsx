import { useModalContext } from "@/context/confirm-context";
import React from "react";

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
                    <button className="btn" onClick={hideModal}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={onConfirm}>
                        OK
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ConfirmationModal;
