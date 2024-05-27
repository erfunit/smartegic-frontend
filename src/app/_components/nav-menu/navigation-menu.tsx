"use client";

import useAppConfig from "@/hooks/use-app-config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavigationMenu: React.FC = () => {
    const { config } = useAppConfig("app-config");
    return (
        <div
            className={clsx("leftmenu-wrapper", {
                hide: config?.["hide-left-menu"],
            })}
        >
            <Link href="/" className="flex h-16 items-center justify-center">
                <Image
                    src="/images/image.avif"
                    alt="logo"
                    width={60}
                    height={70}
                />
            </Link>
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
