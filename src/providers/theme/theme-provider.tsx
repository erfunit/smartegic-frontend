"use client";

import useAppConfig from "@/hooks/use-app-config";
import React, { useEffect } from "react";

export const ThemeProvider: React.FC = ({ children }) => {
    const { config } = useAppConfig("app-config");
    useEffect(() => {
        if (config && config.theme)
            document.documentElement.classList.add(config?.theme);
    }, [config]);
    return <div data-theme={config?.theme || "light"}>{children}</div>;
};
