"use client";

import useAppConfig from "@/hooks/use-app-config";
import React from "react";

export const ThemeProvider: React.FC = ({ children }) => {
    const { config } = useAppConfig("app-config");

    return <div data-theme={config?.theme || "light"}>{children}</div>;
};
