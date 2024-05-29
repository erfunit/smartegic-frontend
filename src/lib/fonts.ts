import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";

export const yekan: NextFont = localFont({
    src: [
        {
            path: "../../public/fonts/YekanBakh-Light.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/fonts/YekanBakh-Regular.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../public/fonts/YekanBakh-Bold.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/YekanBakh-Heavy.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/YekanBakh-Fat.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

export const vazirmatm = Vazirmatn({
    weight: ["200", "400", "600", "800"],
    subsets: ["latin"],
    style: ["normal"],
    display: "swap",
});
