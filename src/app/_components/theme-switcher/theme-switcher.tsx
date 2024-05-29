"use client";

import useAppConfig from "@/hooks/use-app-config";
import React from "react";
import { IconMoon, IconSun } from "../icons/icons";

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
            <IconSun className="swap-off" />
            {/* moon icon */}
            <IconMoon className="swap-on" />
        </label>
    );
};
