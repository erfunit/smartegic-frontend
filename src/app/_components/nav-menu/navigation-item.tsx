import React from "react";
import { NavigationItem } from "./_types/navigations";
import { navigationIcons } from "./navigation-icons";
import Link from "next/link";

export const NavigationItemComponent: React.FC<{ item: NavigationItem }> = ({
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
                    <Link
                        href={item.link || ""}
                        className="flex gap-2 items-center"
                    >
                        <IconComponent />
                        <span>{item.title}</span>
                    </Link>
                </div>
            )}
        </li>
    );
};
