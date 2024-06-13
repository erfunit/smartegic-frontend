import React from "react";
import Image from "next/image";
import { AuthHeroCard } from "./comment-card";

export const AuthHero: React.FC = () => {
    return (
        <div className="relative hidden dark:bg-[#14181c] bg-[#FFE9D1] lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/images/auth-character.avif"
                    alt="auth image"
                    width={1000}
                    height={667}
                />
            </div>
            <AuthHeroCard />
        </div>
    );
};
