"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconBell,
    IconLogout,
    IconMoon,
    IconNavigationToggle,
    IconProfile,
    IconSearch,
} from "../icons/icons";
import useAppConfig from "@/hooks/use-app-config";
import { NavigationMenu } from "../nav-menu/navigation-menu";

export const Navbar: React.FC = () => {
    const { setConfig, config } = useAppConfig("app-config");

    return (
        <div className="flex justify-between h-[65px] items-center px-4 border-b border-slate-200 bg-white">
            <div className="gap-3 flex items-center ">
                {/* <div className="drawer">
                    <div className="drawer-content">
                        <button
                            className="hidden lg:flex"
                            onClick={() =>
                                setConfig({
                                    "hide-left-menu":
                                        !config?.["hide-left-menu"],
                                })
                            }
                            type="button"
                            aria-label="navigation toggle"
                        >
                            <IconNavigationToggle />
                        </button>
                        <button
                            type="button"
                            className="flex lg:hidden"
                            aria-label="navigation toggle"
                        >
                            <IconNavigationToggle />
                        </button>
                    </div>
                    <div className="drawer-side">
                        <div className="menu">
                            <NavigationMenu />
                        </div>
                    </div>
                </div> */}
                <div className="drawer lg:drawer-open">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        aria-label="drawer"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="toggler"
                            className="btn btn-ghost drawer-button lg:hidden"
                        >
                            <IconNavigationToggle />
                        </label>
                        <button
                            className="hidden lg:flex"
                            onClick={() =>
                                setConfig({
                                    "hide-left-menu":
                                        !config?.["hide-left-menu"],
                                })
                            }
                            type="button"
                            aria-label="navigation toggle"
                        >
                            <IconNavigationToggle />
                        </button>
                    </div>
                    <div className="drawer-side lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <NavigationMenu drawer />
                    </div>
                </div>
                <input
                    type="text"
                    aria-label="search"
                    placeholder="search..."
                    className="input hidden md:flex input-bordered font-light h-auto py-2"
                />
                <IconSearch className="md:hidden" />
            </div>
            <div className="gap-3 flex items-center">
                <IconMoon />
                <IconBell />
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        aria-label="profile drop down"
                        tabIndex={0}
                        role="button"
                        className="flex items-center gap-2 btn btn-ghost"
                    >
                        <Image
                            src="/images/test-profile.png"
                            alt=""
                            width={30}
                            className="rounded-full"
                            height={30}
                        />
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-light">Deep</span>
                            <div className="text-xs text-primary font-light">
                                Edit
                            </div>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
                    >
                        <li>
                            <Link href="/#" className="items-center flex gap-2">
                                <IconProfile width={20} />
                                <span className="font-light text-base">
                                    My Profile
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#" className="items-center flex gap-2">
                                <IconBell width={20} />
                                <span className="font-light text-base">
                                    Notifications
                                </span>
                            </Link>
                        </li>
                        <hr className="-mx-2 my-1 border-base-content/10" />
                        <li>
                            <button
                                type="button"
                                className="items-center flex gap-2"
                            >
                                <IconLogout color="red" width={20} />
                                <span className="font-light text-red-500 text-base">
                                    Logout
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
