import { AppConfigProvider } from "@/context/app-config-context";
import { ModalProvider } from "@/context/confirm-context";
import { DictionaryProvider } from "@/context/dictionary-context";
import QueryProvider from "@/providers/react-query";
import { ThemeProvider } from "@/providers/theme/theme-provider";
import React from "react";
import { Toaster } from "../toast/toaster";

type ProvidersWrapperProps = {
    dict: unknown;
    children: React.ReactNode;
};

const ProvidersWrapper: React.FC<
    React.PropsWithChildren & ProvidersWrapperProps
> = ({ dict, children }) => {
    return (
        <DictionaryProvider dict={dict}>
            <AppConfigProvider>
                <ThemeProvider>
                    <QueryProvider>
                        <ModalProvider>
                            <Toaster />
                            {children}
                        </ModalProvider>
                    </QueryProvider>
                </ThemeProvider>
            </AppConfigProvider>
        </DictionaryProvider>
    );
};

export default ProvidersWrapper;
