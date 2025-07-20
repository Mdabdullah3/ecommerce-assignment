import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}
export interface Product {
    _id: string;
    _id: string;
    id: number;
    name: string;
    description: string;
    price: number;
    image?: string;
}
export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
    products?: Product[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}
export type OrderItem = {
    id: number;
    product_id: number;
    product_name: string;
    price: number;
    quantity: number;
    subtotal: number;
    image?: string;
};

export type Order = {
    id: number;
    customer_name: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    payment_method: string;
    status: 'Pending' | 'Processing' | 'Delivered';
    items: OrderItem[];
    created_at: string;
};
