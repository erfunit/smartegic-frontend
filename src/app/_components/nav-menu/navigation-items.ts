import { NavigationItem } from "./_types/navigations";

export const navigationItems: NavigationItem[] = [
    {
        id: 0,
        title: "page1",
        icon: "price",
        children: [
            {
                id: 0,
                title: "sub page1",
                icon: "price",
                children: [
                    {
                        id: 0,
                        title: "sub sub page1",
                        icon: "price",
                        link: "/",
                    },
                    {
                        id: 2,
                        title: "sub sub page1",
                        icon: "price",
                        link: "/",
                    },
                    {
                        id: 3,
                        title: "sub sub page1",
                        icon: "price",
                        link: "/",
                    },
                ],
            },
            {
                id: 1,
                title: "sub page2",
                icon: "price",
                children: [
                    {
                        id: 0,
                        title: "page1",
                        icon: "price",
                        link: "/test-page",
                    },
                ],
            },
            {
                id: 2,
                title: "sub page3",
                icon: "price",
                link: "/test-page",
            },
        ],
    },
    {
        id: 0,
        title: "page2",
        icon: "price",
        children: [
            {
                title: "sub page2 page1",
                icon: "price",
                id: 0,
                link: "/test-page",
            },
        ],
    },
];
