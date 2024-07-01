"use client";

import ConfirmationModal from "@/app/_components/confirmation/confirmation-moda";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ModalContextProps {
    showModal: (message: string, onConfirm: () => void) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModalContext = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [modalState, setModalState] = useState<{
        message: string;
        onConfirm: () => void;
    } | null>(null);

    const showModal = (message: string, onConfirm: () => void) => {
        setModalState({ message, onConfirm });
        (
            document.getElementById("confirmation_modal") as HTMLDialogElement
        )?.showModal();
    };

    const hideModal = () => {
        setModalState(null);
        (
            document.getElementById("confirmation_modal") as HTMLDialogElement
        )?.close();
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalState && (
                <ConfirmationModal
                    message={modalState.message}
                    onConfirm={() => {
                        modalState.onConfirm();
                        hideModal();
                    }}
                />
            )}
        </ModalContext.Provider>
    );
};
