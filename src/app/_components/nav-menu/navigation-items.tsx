import { navigationIcons } from "./navigation-icons";

export type NavigationItem = {
    id: number;
    title: string;
    icon: keyof typeof navigationIcons;
    children?: NavigationItem[];
};

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
                    },
                ],
            },
            {
                id: 2,
                title: "sub page3",
                icon: "price",
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
            },
        ],
    },
];
