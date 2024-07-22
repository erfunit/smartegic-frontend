import { NavigationItem } from "./_types/navigations";

export const navigationItems: NavigationItem[] = [
    {
        id: 0,
        title: "Organization",
        icon: "organization",
        children: [
            {
                id: 0,
                title: "List",
                icon: "list",
                link: "/organization",
            },
            {
                id: 1,
                title: "Add",
                icon: "plus",
                link: "/organization/add",
            },
        ],
    },
];
