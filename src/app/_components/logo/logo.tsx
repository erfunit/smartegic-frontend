import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC<{ route?: string }> = ({ route = "/" }) => {
    return (
        <Link href={route} className="flex h-16 items-center justify-center">
            <Image
                src="/images/image.avif"
                className="object-contain"
                alt="logo"
                width={60}
                height={30}
            />
        </Link>
    );
};
