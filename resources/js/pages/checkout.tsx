import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import React from 'react';

const Checkout = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Premium Leather Wallet',
            price: 49.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
        },
        {
            id: 2,
            name: 'Wireless Headphones',
            price: 129.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
        }
    ];

    const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const shippingCost = 4.99;
    const tax = subtotal * 0.2; // 20% VAT
    const total = subtotal + shippingCost + tax;

    return (
        <div className="pt-20 pb-10 w-10/12 mx-auto px-6">
            <div className="pt-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-2/5">
                        <div className="">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                {products.map((product) => (
                                    <div key={product.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                                        <div className="flex items-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <div className="ml-4">
                                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                                <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">€{product.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t border-gray-200 pt-4">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-sm font-medium text-gray-900">€{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Shipping</span>
                                    <span className="text-sm font-medium text-gray-900">€{shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Tax (VAT 20%)</span>
                                    <span className="text-sm font-medium text-gray-900">€{tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-3">
                                    <span className="text-base font-medium text-gray-900">Total</span>
                                    <span className="text-base font-bold text-gray-900">€{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5">
                        <div className="">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Shipping Information</h2>

                            <form className="space-y-4">
                                <Label htmlFor="name" > Name </Label>
                                <Input placeholder="First Name" name="name" id="name" type="text" required />
                                <div className='flex gap-10 w-full'>
                                    <div className='w-full'>
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input placeholder="(123) 456-7890" name="phone" id="phone" type="tel" required />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="email">Email</Label>
                                        <Input placeholder="Email" name="email" id="email" type="email" required />
                                    </div>
                                </div>
                                <Label htmlFor="address">Address</Label>
                                <Input placeholder="123 Main St" name="address" id="address" type="text" required />

                            </form>
                        </div>

                        <div className="mt-5">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Method</h2>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="cash-on-delivery"
                                        name="cash-on-delivery"
                                        checked={true}
                                        tabIndex={3}
                                    />
                                    <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="card-number"
                                        name="card-number"
                                        tabIndex={4}
                                    />
                                    <Label htmlFor="card-number">Paypal</Label>

                                </div>
                                <div className="mt-6">
                                    <Button className='w-full'>Place Order</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p className="text-xs text-gray-500 text-center mt-10">
                By completing your purchase you agree to our Terms of Service and Privacy Policy.
            </p>
        </div >
    );
};

Checkout.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Checkout;