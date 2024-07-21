import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { createData } from "./core/http-service";
import { AxiosResponse } from "axios";
import { cookieName, refreshName, timeStampName } from "./lib/auth/token-names";

const TOKEN_VALIDITY_PERIOD = 2 * 60 * 60 * 1000;

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

export async function middleware(
    request: NextRequest,
): Promise<NextResponse | undefined> {
    console.log("MIDDLEWARE RUNNING...............................");
    const { pathname, search } = request.nextUrl;
    const localeFromCookie = request.cookies.get("NEXT_LOCALE")?.value;
    const refreshToken = request.cookies.get(cookieName)?.value;
    const accessToken = request.cookies.get(refreshName)?.value;
    const timestamp = parseInt(
        request.cookies.get(timeStampName)?.value || "0",
        10,
    );
    const currentTime = Date.now();

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

    if (pathnameIsMissingLocale) {
        const locale = localeFromCookie || getLocale(request);
        if (locale) {
            return NextResponse.redirect(
                new URL(`/${locale}${pathname}${search}`, request.url),
            );
        }
    }

    const localePath =
        i18n.locales.find((locale) => pathname.startsWith(`/${locale}/`)) ||
        "en";

    if (localePath) {
        if (!pathname.startsWith(`/${localePath}/auth/`) && !accessToken) {
            return NextResponse.redirect(
                new URL(`/${localePath}/auth/login${search}`, request.url),
            );
        }

        if (accessToken) {
            if (currentTime - timestamp > TOKEN_VALIDITY_PERIOD) {
                try {
                    console.log("CALLING REFRESH TOKEN 🔥");
                    const response: AxiosResponse<any> = await createData(
                        "/auth/refresh",
                        {
                            token: refreshToken,
                        },
                    );
                    console.log(response.data);
                    const resopnse = NextResponse.next();
                    resopnse.cookies.set(timeStampName, Date.now().toString(), {
                        httpOnly: true,
                    });
                    resopnse.cookies.set(
                        cookieName,
                        response.data.refresh_token,
                    );
                    resopnse.cookies.set(
                        refreshName,
                        response.data.access_token,
                        {
                            httpOnly: true,
                        },
                    );
                    return resopnse;
                } catch (error) {
                    const resopnse = NextResponse.redirect(
                        new URL(
                            `/${localePath}/auth/login${search}`,
                            request.url,
                        ),
                    );
                    resopnse.cookies.delete(timeStampName);
                    resopnse.cookies.delete(cookieName);
                    resopnse.cookies.delete(refreshName);
                    return resopnse;
                }
            }

            if (pathname.startsWith(`/${localePath}/auth/`))
                return NextResponse.redirect(
                    new URL(`/${localePath}/${search}`, request.url),
                );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icons|images|assets).*)",
    ],
};
