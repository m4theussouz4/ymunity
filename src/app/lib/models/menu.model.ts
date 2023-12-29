export interface MenuObject {
    icon?: string;
    label: string;
    link?: string;
    subItems?: MenuItem[];
}

export interface MenuItem {
    label: string;
    link: string;
    icon: string;
}