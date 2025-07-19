import { Head } from '@inertiajs/react';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import type { ReactNode } from 'react';

const Dashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <div className="p-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600">Welcome to your dashboard.</p>
            </div>
        </>
    );
};
Dashboard.layout = (page: ReactNode) => (
    <AppSidebarLayout breadcrumbs={[{ title: 'Dashboard', href: '/dashboard' }]}>
        {page}
    </AppSidebarLayout>
);

export default Dashboard;
