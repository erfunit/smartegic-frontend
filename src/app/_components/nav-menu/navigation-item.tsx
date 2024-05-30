"use client";

import React from "react";
import { NavigationItem } from "./_types/navigations";
import { navigationIcons } from "./navigation-icons";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { formatPathname } from "./lib/pathname-formatter";

interface NavigationItemProps {
    item: NavigationItem;
}

const IconComponent = ({ icon }: { icon: keyof typeof navigationIcons }) =>
    navigationIcons[icon];

const NavigationItemComponent: React.FC<NavigationItemProps> = ({ item }) => {
    const firstPathName = usePathname();
    const pathname = formatPathname(firstPathName);
    const locale = firstPathName.split("/")[1]; // Assuming locale is the first part of the pathname

    return (
        <li className="mb-0.5 font-light">
            {item.children ? (
                <details>
                    <summary className="flex gap-2 items-center">
                        <IconComponent icon={item.icon} />
                        <span>{item.title}</span>
                    </summary>
                    <ul className="pl-4">
                        {item.children.map((child) => (
                            <NavigationItemComponent
                                key={child.id}
                                item={child}
                            />
                        ))}
                    </ul>
                </details>
            ) : (
                <div
                    className={clsx({
                        "bg-base-200": pathname === item.link,
                    })}
                >
                    <Link
                        href={`/${locale}${item.link}`}
                        className="flex gap-2 items-center"
                    >
                        <IconComponent icon={item.icon} />
                        <span>{item.title}</span>
                    </Link>
                </div>
            )}
        </li>
    );
};

export { NavigationItemComponent };
