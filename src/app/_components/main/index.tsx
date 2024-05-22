import React from "react";

import { Button } from "@components";
import Image from "next/image";
import Link from "next/link";

export const Main: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <div>
                <h1 className="mb-2 text-6xl">Smartegic</h1>
                <p className="mb-2" style={{ fontSize: 18 }}>
                    the frontend application of smartegic
                </p>
                <a
                    className="mb-2"
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    <Button>Docs</Button>
                </a>
            </div>
            <div
                style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 18,
                    backgroundColor: "#f8f8f8",
                    width: "800px",
                    padding: "20px",
                    borderRadius: "20px",
                    marginTop: 25,
                }}
            >
                <h1 className="mb-2 text-4xl">Building a side project?</h1>
                <p>
                    Meet the headless, React-based solution to build sleek{" "}
                    <b>CRUD</b> applications. With{" "}
                    <a
                        className="text-blue-600 underline"
                        href="https://s.refine.dev/superplate"
                        target="_blank"
                    >
                        refine
                    </a>
                    , you can be confident that your codebase will always stay
                    clean and boilerplate-free.
                </p>
                <br />
                <p>
                    Try{" "}
                    <a
                        className="text-blue-600 underline"
                        href="https://s.refine.dev/superplate"
                        target="_blank"
                    >
                        refine
                    </a>{" "}
                    to rapidly build your next <b>CRUD</b> project,{" "}
                    {`whether it's`}
                    an admin panel, dashboard, internal tool or storefront.
                </p>
                <Link
                    aria-label="Link"
                    href="https://s.refine.dev/superplate"
                    target="_blank"
                    className=""
                >
                    <Image
                        width={30}
                        height={30}
                        // className="w-full"
                        alt="test"
                        src="https://cdn.discordapp.com/attachments/991655841793052723/1042775236954820658/Group_572_1.png"
                    />
                </Link>
            </div>
        </div>
    );
};
