import { useState } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import type { ReactNode } from 'react';
import toast from 'react-hot-toast';

type OrderItem = {
    id: number;
    product_id: number;
    product_name: string;
    price: number;
    quantity: number;
    subtotal: number;
    image?: string;
};

type Order = {
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

interface Props {
    orders: Order[];
}

const OrderPage = ({ orders }: Props) => {
    const [localOrders, setLocalOrders] = useState<Order[]>(orders);
    const handleStatusChange = async (orderId: number, newStatus: string) => {
        try {
            await axios.put(`/orders/${orderId}/status`, { status: newStatus });
            setLocalOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.id === orderId ? { ...order, status: newStatus as Order['status'] } : order
                )
            );

            toast.success(`Order status updated to ${newStatus}`);
        } catch (error) {
            toast.error('Failed to update order status');
            console.error(error);
        }
    };

    return (
        <>
            <Head title="Orders" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Orders</h1>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full text-sm text-left table-auto">
                        <thead className="bg-gray-100 dark:bg-neutral-800">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Customer</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Items</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Payment</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {localOrders.map((order, index) => (
                                <tr key={order.id} className="border-t border-gray-200">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{order.customer_name}</td>
                                    <td className="px-4 py-2">{order.email}</td>
                                    <td className="px-4 py-2">
                                        {order.items.map((item) => (
                                            <div key={item.id}>
                                                {item.product_name} × {item.quantity}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-4 py-2">€{order.total}</td>
                                    <td className="px-4 py-2">{order.payment_method}</td>
                                    <td className="px-4 py-2">{order.status}</td>
                                    <td className="px-4 py-2">
                                        <select
                                            className="border rounded p-1 text-sm"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {localOrders.length === 0 && (
                        <div className="p-4 text-center text-gray-500">No orders found.</div>
                    )}
                </div>
            </div>
        </>
    );
};

OrderPage.layout = (page: ReactNode) => (
    <AppSidebarLayout breadcrumbs={[{ title: 'Orders', href: '/orders' }]}>
        {page}
    </AppSidebarLayout>
);
export default OrderPage;
