import React from "react";
import { AuthHero } from "./_components/auth-hero";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}): Promise<React.JSX.Element> {
    return (
        <div className="min-h-screen grid h-screen grid-cols-12">
            <AuthHero />
            {children}
        </div>
    );
}
