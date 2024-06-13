"use client";

import { IconFillStar } from "@/app/_components/icons";
import Image from "next/image";
import React from "react";

export const AuthHeroCard: React.FC = () => {
    return (
        <div className="absolute bottom-[15%] right-[20%]">
            <div className="card w-64 bg-base-100/80 backdrop-blur-lg card-bordered">
                <div className="card-body p-6">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/auth-card-image.avif"
                            height={128}
                            width={128}
                            alt=""
                            className="size-11 bg-base-content/10 p-0.5 mask mask-squircle"
                        />
                        <div className="mt-2 flex items-center justify-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <IconFillStar
                                    key={index}
                                    color="orange"
                                    fill="orange"
                                    width={12}
                                    height={12}
                                />
                            ))}
                        </div>
                        <p className="mt-2 text-sm font-medium">
                            Paul A. Williams
                        </p>
                        <p className="text-xs text-base-content/70">
                            Graphic Designer
                        </p>
                    </div>
                    <p className="text-sm text-base-content/90">
                        It is powerful admin tools have streamlined our
                        operations for business.
                    </p>
                </div>
            </div>
        </div>
    );
};
