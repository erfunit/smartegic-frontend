import { NavigationItem } from "./_types/navigations";

export const navigationItems: NavigationItem[] = [
    {
        id: 0,
        title: "dashboard",
        icon: "price",
        children: [
            {
                id: 0,
                title: "main page",
                icon: "price",
                link: "/",
            },
            {
                id: 1,
                title: "sub page2",
                icon: "price",
                link: "/test-page",
            },
        ],
    },
];
