"use client";

import React, { createContext, useContext } from "react";

const LangContext = createContext<null | string>(null);

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<
    React.PropsWithChildren & { lang: string }
> = ({ lang, children }) => {
    if (!lang) return null;

    return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
};
