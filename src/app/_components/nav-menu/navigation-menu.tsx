"use client";

import React from "react";
import clsx from "clsx";
import useAppConfig from "@/hooks/use-app-config";
import { Logo } from "../logo";
import { navigationItems } from "./navigation-items";
import { NavigationItemComponent } from "./navigation-item";
import { NavigationItem } from "./_types/navigations";

type NavigationMenuProps = {
    drawer?: boolean;
    navItems: NavigationItem[];
};

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
    drawer,
    navItems,
}) => {
    const { config } = useAppConfig("app-config");

    console.log({
        navItems,
        navigationItems,
    });

    // if (drawer) return null;
    return (
        <div
            className={clsx("leftmenu-wrapper z-[1000]", {
                hide: config?.["hide-left-menu"] && !drawer,
                "lg:hidden": drawer,
            })}
        >
            <Logo />
            <div
                data-simplebar="init"
                className="h-[calc(100vh-64px)] lg:h-[calc(100vh-230px)]"
            >
                <ul className="menu mb-6">
                    {navItems?.map((item) => (
                        <NavigationItemComponent key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
