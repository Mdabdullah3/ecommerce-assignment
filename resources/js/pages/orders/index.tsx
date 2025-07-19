import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import React from 'react';

const Order = () => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

Order.layout = (page: React.ReactNode) => (
    <AppSidebarLayout breadcrumbs={[{ title: 'Orders', href: '/orders' }]}>
        {page}
    </AppSidebarLayout>
);
export default Order;