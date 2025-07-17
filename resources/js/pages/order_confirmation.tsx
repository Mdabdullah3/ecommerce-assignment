import React from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

// Data for the order items to make the component reusable
const orderItems = [
    {
        image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&q=80",
        name: '6" Red Velvet Cheesecake Cake',
        price: 21.00,
        quantity: 1,
    },
];

// SVG for the Visa Icon as it's not in Lucide
const VisaIcon = () => (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded">
        <path d="M35 0H3C1.3 0 0 1.3 0 3V21C0 22.7 1.3 24 3 24H35C36.7 24 38 22.7 38 21V3C38 1.3 36.7 0 35 0Z" fill="#282D7B" />
        <path d="M12.9 14.3H11.4L10.3 6.8H12.3L13 11.7C13.1 12.3 13.2 12.8 13.4 13.4H13.5C13.6 12.8 13.9 11.9 14.4 10.7L15.3 6.8H17.2L14.9 14.3H12.9Z" fill="white" />
        <path d="M21.1 14.3H18.8V6.8H21.1C21.9 6.8 22.5 7.1 22.9 7.6C23.3 8.1 23.5 8.7 23.5 9.5C23.5 10.8 22.9 11.6 21.9 12L23.7 14.3H21.8L20.3 12.2H19.9V14.3H18.8V6.8H19.9V11H20.3L21.8 8.1H22.4L21.1 10.2C21.6 10.4 21.9 10.7 21.9 11.2C21.9 11.7 21.6 12 21.1 12H19.9V6.8H18.8V14.3H21.1Z" fill="white" />
        <path d="M26.4 14.3H24.3L23.8 12.6H26.9L27.1 11.4H23.6L22.9 6.8H28.4L28.2 8.1H24.1L24.4 10.1H27.4L27.2 11.4H24.8L25.1 12.6H28L27.8 14.3H26.4Z" fill="white" />
        <path d="M7.4 6.8L6.2 12.1L5 6.8H3L5.8 14.3H7.7L10.5 6.8H8.5L7.4 12.1L8.5 6.8H7.4Z" fill="white" />
        <path d="M32.8 7.1C32.4 6.9 31.9 6.8 31.3 6.8C30.2 6.8 29.4 7.2 29.4 8C29.4 8.6 29.9 8.9 30.6 9.2L31.1 9.4C32 9.7 32.5 10.1 32.5 10.8C32.5 11.8 31.6 12.3 30.6 12.3C29.9 12.3 29.3 12.1 28.8 11.9L28.5 13.1C29 13.4 29.7 13.5 30.4 13.5C31.9 13.5 33.1 12.9 33.1 11.6C33.1 10.4 31.8 9.9 30.7 9.5L30.2 9.3C29.6 9.1 29.2 8.8 29.2 8.3C29.2 7.7 29.8 7.4 30.5 7.4C31.1 7.4 31.6 7.5 32 7.7L32.2 6.5C32.4 6.6 32.6 6.7 32.8 6.8V7.1Z" fill="white" />
    </svg>
);


// Component for a single item in the order list
const OrderItem = ({ item }) => (
    <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
            <div>
                <p className="font-medium text-gray-800">{item.name}</p>
            </div>
        </div>
        <div className="text-right">
            <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
    </div>
);

// Main Order Confirmation Component
const OrderConfirmation = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 ">
            <div className="w-full max-w-6xl mx-auto pt-20">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-white bg-green-600 rounded-full p-2" />
                    <h1 className="text-3xl font-bold text-gray-800 mt-4">Thanks for your order!</h1>
                    <button className="mt-6 px-6 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        Continue shopping
                    </button>
                </div>

                {/* Order Details Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                    {/* Green Info Bar */}
                    <div className="bg-[#225F4D] p-4 flex flex-wrap items-center justify-between gap-4 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                            <p className="text-sm font-medium">Order ID : <span className="font-bold">20002455468764</span></p>
                            <p className="text-sm">Order Date : <span className="font-normal">21 May, 2024</span></p>
                            <p className="text-sm">Estimated delivery : <span className="font-normal">28 May, 2024</span></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 border border-white/50 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">
                                Download Invoice
                            </button>
                            <button className="px-4 py-2 bg-yellow-400 text-black rounded-full text-xs font-bold hover:bg-yellow-500 transition-colors">
                                Track order
                            </button>
                        </div>
                    </div>

                    {/* Items List */}
                    <div className="p-6 divide-y divide-gray-200">
                        {orderItems.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                    </div>

                    {/* Order Summary Section */}
                    <div className="bg-slate-50/70 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Payment Method */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Payment method</h3>
                                <div className="flex items-center space-x-2">
                                    <VisaIcon />
                                    <p className="text-sm text-gray-600">VISA <span className="tracking-widest">••••</span> 9999</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                                <address className="text-sm text-gray-600 not-italic">
                                    Malti Malia<br />
                                    6391 Elgin St. Celina, Delaware 10299
                                </address>
                            </div>

                            {/* Delivery Method */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Delivery method</h3>
                                <p className="text-sm text-gray-600">Express shipping (2-3 days)</p>
                            </div>

                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Need Help? */}
                            <div className="md:col-span-1">
                                <h3 className="font-semibold text-gray-800 mb-2">Need help?</h3>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-indigo-600 cursor-pointer">
                                    <p>customercare@asoom.com</p>
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1 hover:text-indigo-600 cursor-pointer">
                                    <p>+1 8256 6546</p>
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="md:col-span-2 flex justify-end">
                                <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <p>Item cost</p>
                                        <p>$374.00</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <p>Shipping cost</p>
                                        <p>$14.00</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <p>Tax</p>
                                        <p>$5.00</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-green-600">
                                        <p>Coupon</p>
                                        <p>-$15.00</p>
                                    </div>
                                    <div className="border-t border-gray-200 my-2"></div>
                                    <div className="flex justify-between font-bold text-lg text-gray-800">
                                        <p>Total Cost</p>
                                        <p>$390.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

OrderConfirmation.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;


export default OrderConfirmation;