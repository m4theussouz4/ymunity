export interface Address {
    id: string;
    mainAddress: boolean;
    title: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface ButtonModel {
    label: string;
    icon?: string;
    callback?: () => void;
}