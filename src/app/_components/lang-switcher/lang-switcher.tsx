"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "../../../../i18n.config";

export function LocaleSwitcher(): React.JSX.Element {
    const pathName = usePathname();

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <ul className={`flex gap-x-3`}>
            {i18n.locales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className={`flex h-9 items-center rounded-md bg-black px-3 text-white`}
                        >
                            {locale === "fa" ? "فارسی" : locale}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
