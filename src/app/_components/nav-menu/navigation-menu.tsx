"use client";

import React from "react";
import useAppConfig from "@/hooks/use-app-config";
import clsx from "clsx";
import { Logo } from "../logo";

export const NavigationMenu: React.FC = () => {
    const { config } = useAppConfig("app-config");
    return (
        <div
            className={clsx("leftmenu-wrapper", {
                hide: config?.["hide-left-menu"],
            })}
        >
            <Logo />
            <div
                data-simplebar="init"
                className="h-[calc(100vh-64px)] lg:h-[calc(100vh-230px)]"
            >
                <ul className="menu mb-6">
                    <li className="mb-0.5">
                        <details>
                            <summary>parent</summary>
                            <ul>
                                <li>child 1</li>
                                <li>child 2</li>
                                <li>child 3</li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};
