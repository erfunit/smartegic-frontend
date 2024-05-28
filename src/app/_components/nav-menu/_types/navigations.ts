import { navigationIcons } from "../navigation-icons";

export type NavigationItem = {
    id: number;
    title: string;
    link?: string;
    icon: keyof typeof navigationIcons;
    children?: NavigationItem[];
};
