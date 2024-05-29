import React from "react";
import "@/app/globals.css";

import { Metadata } from "next";
import QueryProvider from "src/providers/react-query";
import ReduxProvider from "src/providers/redux";

import { Locale, i18n } from "../../../i18n.config";
import { vazirmatm } from "@/lib/fonts";
import { AppConfigProvider } from "@/context/app-config-context";
import { ThemeProvider } from "@/providers/theme/theme-provider";

export const metadata: Metadata = {
    title: "Smartegic Home",
};

export async function generateStaticParams(): Promise<
    {
        lang: "fa" | "en";
    }[]
> {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}): React.ReactNode {
    return (
        <html dir={params.lang === "en" ? "ltr" : "rtl"} lang={params.lang}>
            <body className={`${vazirmatm.className}`}>
                <AppConfigProvider>
                    <ThemeProvider>
                        <QueryProvider>
                            <ReduxProvider>{children}</ReduxProvider>
                        </QueryProvider>
                    </ThemeProvider>
                </AppConfigProvider>
            </body>
        </html>
    );
}
