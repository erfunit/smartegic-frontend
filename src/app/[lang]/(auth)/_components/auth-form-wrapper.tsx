import { Logo } from "@/app/_components";
import { Button } from "@/app/_components/button";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import React from "react";

export const AuthFormWrapper: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <div className="col-span-12 bg-white dark:bg-base-100 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
            <div className="flex flex-col items-stretch p-8 lg:p-16">
                <div className="flex items-center justify-between">
                    <Logo />
                    <Button
                        variant="ghost"
                        shape="circle"
                        aria-label="s"
                        className="border border-base-content/10 text-base-content/70 hover:bg-base-content/10"
                    >
                        <ThemeSwitcher />
                    </Button>
                </div>
                {children}
            </div>
        </div>
    );
};
