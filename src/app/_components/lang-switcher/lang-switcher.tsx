"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = Cookies.get("NEXT_LOCALE");

    const handleLanguageChange = (locale: string) => {
        Cookies.set("NEXT_LOCALE", locale);
        router.push(`/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`);
    };

    useEffect(() => {
        if (locale) {
            router.push(`/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`);
        }
    }, [router, pathname]);

    return (
        // <div>
        //     <button type="button" onClick={() => handleLanguageChange("fa")}>
        //         فارسی
        //     </button>
        //     <button type="button" onClick={() => handleLanguageChange("en")}>
        //         English
        //     </button>
        // </div>
        <div className="dropdown dropdown-bottom dropdown-end">
            <div
                aria-label="profile drop down"
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 btn btn-ghost font-normal text-base "
            >
                {locale === "fa" ? "EN" : "فارسی"}
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
            >
                <li>
                    <button
                        type="button"
                        onClick={() => handleLanguageChange("fa")}
                    >
                        فارسی
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => handleLanguageChange("en")}
                    >
                        English
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
