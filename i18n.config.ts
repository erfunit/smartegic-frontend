export const i18n = {
    defaultLocale: "en",
    locales: ["en", "fa"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

/*
export const i18n = {
    locales: ["en", "fr", "de"], // Add your supported locales
    defaultLocale: "en",
};
*/
