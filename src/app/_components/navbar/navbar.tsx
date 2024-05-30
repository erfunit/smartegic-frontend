"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconBell,
    IconLogout,
    IconNavigationToggle,
    IconProfile,
    IconSearch,
} from "../icons/icons";
import useAppConfig from "@/hooks/use-app-config";
import { NavigationMenu } from "../nav-menu/navigation-menu";
import { ThemeSwitcher } from "../theme-switcher";
import { NavigationItem } from "../nav-menu/_types/navigations";
import LanguageSwitcher from "../lang-switcher";

type NavbarProps = {
    navItems: NavigationItem[];
    navbarDict: {
        edit: string;
        search: string;
        profile: {
            myProfile: string;
            notifications: string;
            logout: string;
        };
    };
};

export const Navbar: React.FC<NavbarProps> = ({ navItems, navbarDict }) => {
    const { setConfig, config } = useAppConfig("app-config");

    return (
        <div className="flex justify-between p-4 z-50 h-[65px] items-center px-4 border-b border-base-200 bg-base-100 transition-all">
            <div className="gap-3 flex items-center rounded-t-xl">
                <div className="lg:drawer lg:drawer-open max-h-7">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        aria-label="drawer"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content max-h-7 flex flex-col items-center justify-center">
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
                    <div className="drawer-side  lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <NavigationMenu navItems={navItems} drawer />
                    </div>
                </div>
                <input
                    type="text"
                    aria-label="search"
                    placeholder={navbarDict.search}
                    className="input hidden md:flex input-bordered font-light h-auto py-2"
                />
                <IconSearch className="md:hidden" />
            </div>
            <div className="gap-3 flex items-center">
                <LanguageSwitcher />
                <ThemeSwitcher />
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
                                {navbarDict.edit}
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
                                    {navbarDict.profile.myProfile}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#" className="items-center flex gap-2">
                                <IconBell width={20} />
                                <span className="font-light text-base">
                                    {navbarDict.profile.notifications}
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
                                    {navbarDict.profile.logout}
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
