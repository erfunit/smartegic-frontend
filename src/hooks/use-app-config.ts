import { AppConfig, AppConfigContext } from "@/context/app-config-context";
import { useContext, useEffect, useCallback } from "react";

const useAppConfig = (key: string) => {
    const context = useContext(AppConfigContext);
    if (!context) {
        throw new Error(
            "useAppConfig must be used within an AppConfigProvider",
        );
    }

    const { state, dispatch } = context;

    useEffect(() => {
        const storedConfig = localStorage.getItem(key);
        if (storedConfig) {
            dispatch({ type: "SET_CONFIG", payload: JSON.parse(storedConfig) });
        }
    }, [key, dispatch]);

    const setConfig = useCallback(
        (newConfig: AppConfig) => {
            localStorage.setItem(key, JSON.stringify(newConfig));
            dispatch({ type: "SET_CONFIG", payload: newConfig });
        },
        [key, dispatch],
    );

    return { config: state.config, setConfig };
};

export default useAppConfig;
