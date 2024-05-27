import React from "react";
import dynamic from "next/dynamic";

const NavigationMenu = dynamic(
    () =>
        import("@/app/_components/nav-menu/navigation-menu").then(
            (mod) => mod.NavigationMenu,
        ),
    { ssr: false },
);

const Navbar = dynamic(
    () => import("@/app/_components/navbar/navbar").then((mod) => mod.Navbar),
    { ssr: false },
);

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <div className="w-full h-full">
            <div className="flex overflow-hidden">
                <div className="hidden lg:block">
                    <NavigationMenu />
                </div>
                <div className="main-wrapper h-full overflow-auto">
                    <Navbar />
                    <div className="content-wrapper min-h-[calc(100vh-65px)]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
