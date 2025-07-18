import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

interface OrderItemType {
    id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    price: string;
    quantity: number;
    subtotal: string;
    created_at: string;
    updated_at: string;
    image: string;
}

interface OrderType {
    id: number;
    customer_name: string;
    email: string;
    phone: string;
    address: string;
    payment_method: string;
    total: string;
    status: string;
    created_at: string;
    updated_at: string;
    items: OrderItemType[];
}

interface OrderConfirmationProps {
    order: OrderType;
}

const OrderItem = ({ item }: { item: OrderItemType }) => (
    <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-md bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-semibold">
                <img src={item.image} alt="" />
            </div>
            <div>
                <p className="font-medium text-gray-800">{item.product_name}</p>
            </div>
        </div>
        <div className="text-right">
            <p className="font-semibold text-gray-800">${Number(item.price).toFixed(2)}</p>
            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
    </div>
);

const OrderConfirmation = ({ order }: OrderConfirmationProps) => {
    return (
        <>
            <Head title={`Order Confirmation - ${order.customer_name}`} />
            <section className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="mx-auto w-full max-w-6xl pt-20">
                    {/* Header Section */}
                    <div className="mb-8 text-center">
                        <CheckCircle2 className="mx-auto h-12 w-12 rounded-full bg-green-600 p-2 text-white" />
                        <h1 className="mt-4 text-3xl font-bold text-gray-800">Thanks for your order, {order.customer_name}!</h1>
                        <Link href="/">
                            <button className="mt-6 cursor-pointer rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100">
                                Continue shopping
                            </button>
                        </Link>
                    </div>

                    {/* Order Details Card */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                        {/* Green Info Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#225F4D] p-4 text-white">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                                <p className="text-sm font-medium">
                                    Order ID : <span className="font-bold">{order.id}</span>
                                </p>
                                <p className="text-sm">
                                    Order Date : <span className="font-normal">{new Date(order.created_at).toLocaleDateString()}</span>
                                </p>
                                <p className="text-sm">
                                    Estimated delivery :{' '}
                                    <span className="font-normal">
                                        {new Date(new Date(order.created_at).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                    </span>

                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="rounded-full border border-white/50 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10">
                                    Download Invoice
                                </button>
                                <button className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-yellow-500">
                                    Track order
                                </button>
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="divide-y divide-gray-200 p-6">
                            {order.items.map((item) => (
                                <OrderItem key={item.id} item={item} />
                            ))}
                        </div>

                        {/* Order Summary Section */}
                        <div className="bg-slate-50/70 p-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Payment Method */}
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Payment method</h3>
                                    <p className="text-sm text-gray-600">{order.payment_method}</p>
                                </div>

                                {/* Address */}
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Address</h3>
                                    <address className="text-sm whitespace-pre-line text-gray-600 not-italic">{order.address}</address>
                                </div>

                                {/* Delivery Method */}
                                <div>
                                    <h3 className="mb-2 font-semibold text-gray-800">Delivery method</h3>
                                    <p className="text-sm text-gray-600">Express shipping (2-3 days)</p>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 md:grid-cols-3">
                                {/* Need Help? */}
                                <div className="md:col-span-1">
                                    <h3 className="mb-2 font-semibold text-gray-800">Need help?</h3>
                                    <div className="flex cursor-pointer items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600">
                                        <p>customercare@asoom.com</p>
                                        <ExternalLink className="h-4 w-4" />
                                    </div>
                                    <div className="mt-1 flex cursor-pointer items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600">
                                        <p>+1 8256 6546</p>
                                        <ExternalLink className="h-4 w-4" />
                                    </div>
                                </div>

                                {/* Cost Breakdown */}
                                <div className="flex justify-end md:col-span-2">
                                    <div className="w-full max-w-xs space-y-2">
                                        {/* You might want to calculate these dynamically or pass from props */}
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <p>Item cost</p>
                                            <p>${order.items.reduce((sum, i) => sum + Number(i.subtotal), 0).toFixed(2)}</p>
                                        </div>

                                        <div className="my-2 border-t border-gray-200"></div>
                                        <div className="flex justify-between text-lg font-bold text-gray-800">
                                            <p>Total Cost</p>
                                            <p>${Number(order.total).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

OrderConfirmation.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default OrderConfirmation;
