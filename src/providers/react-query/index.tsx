"use client";

import React, { useState } from "react";
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toast } from "@/types/toast.interface";
import { showToast } from "@/stores/toast.store";

const QueryProvider: React.FC = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        retry: 1,
                        refetchOnWindowFocus: false,
                    },
                },

                queryCache: new QueryCache({
                    onError: () => {
                        // show notifications
                    },
                }),

                mutationCache: new MutationCache({
                    onError: (error: unknown) => {
                        showNotifications(error as any);
                        console.log(error);
                    },
                }),
            }),
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const showNotifications = (problem: any) => {
    const notifications: Omit<Toast, "id">[] = [];
    if (problem?.error) {
        problem.error.forEach((item: any) => {
            item.forEach((error: any) => {
                notifications.push({
                    message: error.msg,
                    type: "error",
                });
            });
        });
    }

    showToast(notifications);
};

export default QueryProvider;
