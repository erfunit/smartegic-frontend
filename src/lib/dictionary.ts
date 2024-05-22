import "server-only";
import type { Locale } from "../../i18n.config";

const dictionaries = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    fa: () => import("@/dictionaries/fa.json").then((module) => module.default),
};

export const getDictionary = async (
    locale: Locale,
): Promise<{
    hello: string;
    greet: string;
    world: string;
    documentation: string;
    language: {
        tr: string;
        en: string;
    };
}> => dictionaries[locale]();
