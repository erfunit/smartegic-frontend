import React from "react";
import dynamic from "next/dynamic";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { NavigationItem } from "@/app/_components/nav-menu/_types/navigations";

const NavigationMenu = dynamic(
    () =>
        import("@/app/_components/nav-menu/navigation-menu").then(
            (mod) => mod.NavigationMenu,
        ),
    { ssr: true },
);

const Navbar = dynamic(
    () => import("@/app/_components/navbar/navbar").then((mod) => mod.Navbar),
    { ssr: true },
);

export default async function MainLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}): Promise<React.JSX.Element> {
    const dict = await getDictionary(lang);

    return (
        <div className="w-full h-full">
            <div className="flex overflow-hidden h-full">
                <div className="hidden lg:block">
                    <NavigationMenu
                        navItems={dict.navigations as NavigationItem[]}
                    />
                </div>
                <div className="main-wrapper  h-full overflow-auto flex flex-col">
                    <Navbar
                        navbarDict={dict.navbar}
                        navItems={dict.navigations as NavigationItem[]}
                    />
                    <div className="content-wrapper z-20 flex-grow">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
