import React from "react";
import "../../styles/global.css";
import { Container } from "@/components/container/index";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import QueryProvider from "src/providers/react-query";
import ReduxProvider from "src/providers/redux";
import { Locale, i18n } from "../../../i18n.config";

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
            <body>
                <QueryProvider>
                    <ReduxProvider>
                        <Container>
                            <Header />
                            {children}
                            <Footer />
                        </Container>
                    </ReduxProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
