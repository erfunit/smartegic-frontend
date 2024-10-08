import Image from "next/image";
import React from "react";

export const Footer: React.FC = () => {
    return (
        <div className="py-5 text-center bg-gray-800">
            <a
                href="https://github.com/pankod"
                target="_blank"
                className="block mb-3"
                data-testid="pankod-logo"
            >
                <Image
                    src="/icons/pankod-icon.svg"
                    alt="pankod"
                    width="140"
                    height="28"
                />
            </a>

            <ul
                className="flex justify-center p-0 m-0 list-none"
                data-testid="icons-container"
            >
                <li className="mx-3">
                    <Image
                        src="/icons/github-icon.svg"
                        alt="github"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/twitter-icon.svg"
                        alt="nextjs"
                        width="28"
                        height="28"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/youtube-icon.svg"
                        alt="youtube"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <Image
                        src="/icons/linkedin-icon.svg"
                        alt="linkedin"
                        width="28"
                        height="32"
                    />
                </li>
            </ul>
        </div>
    );
};
