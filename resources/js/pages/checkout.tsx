import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { useCartStore } from '@/store/useCartStore';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
const Checkout = () => {
    const { cart, clearCart } = useCartStore();
    const [paymentMethod, setPaymentMethod] = useState('cash-on-delivery');
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
    });

    const subtotal = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const shippingCost = 4.99;
    const tax = subtotal * 0.2;
    const total = subtotal + shippingCost + tax;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/orders', {
                customer_name: form.name,
                phone: form.phone,
                email: form.email,
                address: form.address,
                cart,
                payment_method: paymentMethod,
            });
            const { order_id } = response.data;
            toast.success("Order placed successfully!");
            clearCart();
            window.location.href = `/order-confirmation/${order_id}`;
        } catch (error) {
            console.error(error);
            toast.error("Failed to place order.");
        }
    };
    return (
        <>
            <Head title="Checkout" />
            <div className="pt-20 pb-10 w-10/12 mx-auto px-6">
                <div className="pt-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-3/5">
                            <div className="shadow-lg rounded-2xl p-10">


                                <div className="space-y-4 mb-6">
                                    {cart.map((product) => (
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
                                            <p className="text-sm font-medium text-gray-900">€{product.price * product.quantity}</p>
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

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <Label htmlFor="name">Name</Label>
                                    <Input placeholder="First Name" name="name" id="name" type="text" required value={form.name} onChange={handleChange} />

                                    <div className='flex gap-10 w-full'>
                                        <div className='w-full'>
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input placeholder="(123) 456-7890" name="phone" id="phone" type="tel" required value={form.phone} onChange={handleChange} />
                                        </div>
                                        <div className='w-full'>
                                            <Label htmlFor="email">Email</Label>
                                            <Input placeholder="Email" name="email" id="email" type="email" required value={form.email} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <Label htmlFor="address">Address</Label>
                                    <Input placeholder="123 Main St" name="address" id="address" type="text" required value={form.address} onChange={handleChange} />
                                    <div className="mt-5">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Method</h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Checkbox
                                                    id="cash-on-delivery"
                                                    name="payment"
                                                    checked={paymentMethod === 'cash-on-delivery'}
                                                    onChange={() => setPaymentMethod('cash-on-delivery')}
                                                />
                                                <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
                                            </div>

                                            <div className="flex items-center space-x-3">
                                                <Checkbox
                                                    id="paypal"
                                                    name="payment"
                                                    checked={paymentMethod === 'paypal'}
                                                    onChange={() => setPaymentMethod('paypal')}
                                                />
                                                <Label htmlFor="paypal">Paypal</Label>
                                            </div>

                                            <Button className="w-full mt-6" type="submit">Place Order</Button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="text-xs text-gray-500 text-center mt-10">
                    By completing your purchase you agree to our Terms of Service and Privacy Policy.
                </p>
            </div >
        </>
    );
};

Checkout.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Checkout;