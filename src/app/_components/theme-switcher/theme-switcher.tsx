"use client";

import useAppConfig from "@/hooks/use-app-config";
import React from "react";
import { IconMoon, IconSun } from "../icons";

export const ThemeSwitcher: React.FC = () => {
    const { config, setConfig } = useAppConfig("app-config");

    const switchHandler = () => {
        setConfig({
            theme: config?.theme
                ? config?.theme === "light"
                    ? "dark"
                    : "light"
                : "light",
        });
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("light");
    };

    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
                aria-label="theme toggler"
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={() => switchHandler()}
            />

            {/* sun icon */}
            <IconSun className="swap-on" />
            {/* moon icon */}
            <IconMoon className="swap-off" />
        </label>
    );
};
