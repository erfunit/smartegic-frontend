/** @type {import('tailwindcss').Config} */

// const daisy = "";
module.exports = {
    safelist: [
        // Column span classes
        ...["", "sm:", "md:", "lg:", "xl:", "2xl:"].flatMap((prefix) =>
            Array.from({ length: 12 }, (_, i) => `${prefix}col-span-${i + 1}`),
        ),
        // Row span classes
        ...["", "sm:", "md:", "lg:", "xl:", "2xl:"].flatMap((prefix) =>
            Array.from({ length: 12 }, (_, i) => `${prefix}row-span-${i + 1}`),
        ),
        // Grid column classes
        ...["", "sm:", "md:", "lg:", "xl:", "2xl:"].flatMap((prefix) =>
            Array.from({ length: 12 }, (_, i) => `${prefix}grid-cols-${i + 1}`),
        ),
        // Grid row classes
        ...["", "sm:", "md:", "lg:", "xl:", "2xl:"].flatMap((prefix) =>
            Array.from({ length: 12 }, (_, i) => `${prefix}grid-rows-${i + 1}`),
        ),
    ],
    purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                "leftbar-width": "var(--leftbar-width)",
            },
            colors: {
                lightGray: "#F2F5F8",
            },
            transitionTimingFunction: {
                cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            "leftmenu-background": "#fff",
            "border-color":
                "var(--fallback-b2, oklch(var(--b2) / var(--tw-border-opacity)))",
            minWidth: {
                "15rem": "15rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("tailwind-scrollbar"),
        require("daisyui"),
        require("tailwindcss-rtl"),
    ],
    daisyui: {
        themes: ["light", "dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        // darkTheme: "dark", // name of one of the included themes for dark mode
        // base: true, // applies background color and foreground color for root element by default
        // styled: true, // include daisyUI colors and design decisions for all components
        // utils: true, // adds responsive and modifier utility classes
        // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
        // themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
