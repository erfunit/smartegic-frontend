"use client";

import React from "react";
import clsx from "clsx";
import useAppConfig from "@/hooks/use-app-config";
import { Logo } from "../logo";
import { navigationItems } from "./navigation-items";
import { NavigationItemComponent } from "./navigation-item";

export const NavigationMenu: React.FC<{ drawer?: boolean }> = ({ drawer }) => {
    const { config } = useAppConfig("app-config");

    if (drawer) return null;
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
                    {navigationItems.map((item) => (
                        <NavigationItemComponent key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
