import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "../i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-ignore locales are readonly
    const { locales } = i18n;
    const languages = new Negotiator({
        headers: negotiatorHeaders,
    }).languages();

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request: NextRequest): NextResponse | undefined {
    const { pathname } = request.nextUrl;

    // Handle root path
    if (pathname === "/") {
        const locale = getLocale(request);
        console.log(locale);
        if (locale) {
            return NextResponse.redirect(new URL(`/${locale}`, request.url));
        }
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale in the pathname
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        if (locale) {
            return NextResponse.redirect(
                new URL(`/${locale}${pathname}`, request.url),
            );
        }
    }
    return NextResponse.next();
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, and asset paths
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icons|images|assets).*)",
    ],
};
