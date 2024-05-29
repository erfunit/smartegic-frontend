export const formatPathname = (pathname: string): string => {
    const trimmedPathname = pathname.substring(3);
    return trimmedPathname.startsWith("/")
        ? trimmedPathname
        : `/${trimmedPathname}`;
};
