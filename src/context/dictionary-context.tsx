"use client";

import React, { createContext, useContext } from "react";

const DictionaryContext = createContext(null);

export const useDictionary = () => useContext(DictionaryContext);

export const DictionaryProvider: React.FC<
    React.PropsWithChildren & { dict: unknown }
> = ({ dict, children }) => {
    const dictData: any = dict as any;
    if (!dict) return null;

    return (
        <DictionaryContext.Provider value={dictData}>
            {children}
        </DictionaryContext.Provider>
    );
};
