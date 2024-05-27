"use client";

import React from "react";
import clsx from "clsx";
import useAppConfig from "@/hooks/use-app-config";
import { Logo } from "../logo";
import { navigationItems, NavigationItem } from "./navigation-items";
import { navigationIcons } from "./navigation-icons";

const NavigationItemComponent: React.FC<{ item: NavigationItem }> = ({
    item,
}) => {
    const IconComponent = () => navigationIcons[item.icon];
    return (
        <li className="mb-0.5">
            {item.children ? (
                <details>
                    <summary>
                        <IconComponent />
                        {item.title}
                    </summary>
                    <ul>
                        {item.children.map((child) => (
                            <NavigationItemComponent
                                key={child.id}
                                item={child}
                            />
                        ))}
                    </ul>
                </details>
            ) : (
                <div>
                    <IconComponent />
                    {item.title}
                </div>
            )}
        </li>
    );
};

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
                    {navigationItems.map((item) => (
                        <NavigationItemComponent key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
