import { SharedData, type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import Navbar from './navbat';
import { usePage } from '@inertiajs/react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children }: AppLayoutProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="font-sans bg-background">
            <Navbar auth={auth} />
            <main>{children}</main>
        </div>
    );
}
