import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const { locales } = i18n;
    const languages = new Negotiator({
        headers: negotiatorHeaders,
    }).languages();

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request: NextRequest): NextResponse | undefined {
    const { pathname, search } = request.nextUrl;
    const localeFromCookie = request.cookies.get("NEXT_LOCALE")?.value;
    const accessToken = request.cookies.get("access-token")?.value;

    // Handle root path
    if (pathname === "/") {
        const locale = localeFromCookie || getLocale(request);
        if (locale) {
            return NextResponse.redirect(
                new URL(`/${locale}${search}`, request.url),
            );
        }
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale in the pathname
    if (pathnameIsMissingLocale) {
        const locale = localeFromCookie || getLocale(request);
        if (locale) {
            return NextResponse.redirect(
                new URL(`/${locale}${pathname}${search}`, request.url),
            );
        }
    }

    // Check if the path starts with a locale
    const localePath = i18n.locales.find((locale) =>
        pathname.startsWith(`/${locale}/`),
    );

    if (
        !pathname.startsWith(`/${localePath}/auth/`) &&
        accessToken === undefined
    ) {
        return NextResponse.redirect(
            new URL(`/${localePath}/auth/login${search}`, request.url),
        );
    }

    if (
        accessToken !== undefined &&
        pathname.startsWith(`/${localePath}/auth/`)
    ) {
        return NextResponse.redirect(
            new URL(`/${localePath}/${search}`, request.url),
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icons|images|assets).*)",
    ],
};
