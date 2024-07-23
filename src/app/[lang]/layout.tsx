import React from "react";
import "@/app/globals.css";

import { Metadata } from "next";

import { Locale, i18n } from "../../../i18n.config";
import { vazirmatm } from "@/lib/fonts";
import ProvidersWrapper from "../_components/providers/providers";
import { getDictionary } from "@/lib/dictionary";

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

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}): Promise<React.ReactNode> {
    const dictionary = await getDictionary(params.lang);
    return (
        <html dir={params.lang === "en" ? "ltr" : "rtl"} lang={params.lang}>
            <body className={`${vazirmatm.className}`}>
                <ProvidersWrapper dict={dictionary} lang={params.lang}>
                    {children}
                </ProvidersWrapper>
            </body>
        </html>
    );
}
