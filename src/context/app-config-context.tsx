"use client";

import React, { createContext, useReducer, ReactNode } from "react";

export type AppConfig = {
    [key: string]: any;
};

type AppConfigState = {
    config: AppConfig | null;
};

type Action = { type: "SET_CONFIG"; payload: Partial<AppConfig> };

const AppConfigContext = createContext<
    | {
          state: AppConfigState;
          dispatch: React.Dispatch<Action>;
      }
    | undefined
>(undefined);

const appConfigReducer = (
    state: AppConfigState,
    action: Action,
): AppConfigState => {
    switch (action.type) {
        case "SET_CONFIG":
            return { config: { ...state.config, ...action.payload } };
        default:
            return state;
    }
};

const AppConfigProvider = ({
    children,
}: React.PropsWithChildren<{ children: ReactNode }>) => {
    const [state, dispatch] = useReducer(appConfigReducer, { config: null });

    return (
        <AppConfigContext.Provider value={{ state, dispatch }}>
            {children}
        </AppConfigContext.Provider>
    );
};

export { AppConfigProvider, AppConfigContext };
