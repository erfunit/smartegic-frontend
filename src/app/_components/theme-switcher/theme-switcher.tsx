"use client";

import useAppConfig from "@/hooks/use-app-config";
import React from "react";

export const ThemeSwitcher: React.FC = () => {
    const { config, setConfig } = useAppConfig("app-theme");

    const switchHandler = () => {
        setConfig({
            theme: config?.theme
                ? config?.theme === "light"
                    ? "dark"
                    : "light"
                : "light",
        });
    };

    return (
        <button type="button" onClick={switchHandler}>
            switch | {config?.theme ? config.theme : null}
        </button>
    );
};
