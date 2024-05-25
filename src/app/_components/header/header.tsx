import React from "react";

import { Logo } from "@components";
import LocaleSwitcher from "@/components/lang-switcher";

export const Header: React.FC = () => {
    return (
        <div
            className="flex items-center justify-between p-2 px-5 text-xl text-center text-white bg-gray-800"
            data-testid="container"
        >
            <Logo />
            <ul>
                <LocaleSwitcher />
            </ul>
        </div>
    );
};
