import { useModalContext } from "@/context/confirm-context";

type AsyncFunction = (...args: any[]) => Promise<any> | any;

const useConfirm = <T extends AsyncFunction>(callback: T, message: string) => {
    const { showModal } = useModalContext();

    return (...args: Parameters<T>): Promise<ReturnType<T> | null> => {
        return new Promise((resolve) => {
            showModal(message, async () => {
                const result = await callback(...args);
                resolve(result);
            });
        });
    };
};

export default useConfirm;
