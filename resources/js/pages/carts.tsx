import AppLayout from "@/layouts/app-layout";
import { useCartStore } from "@/store/useCartStore";
import { Link } from "@inertiajs/react";
import { Minus, Plus, Trash } from "lucide-react";
import toast from "react-hot-toast";

const CartComponents = () => {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    } = useCartStore();

    const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="w-10/12 mx-auto min-h-screen pt-20">
            {
                cart.length === 0 ? (
                    <div className="flex flex-col justify-center items-center h-screen">
                        <h1 className="text-2xl font-bold">Your cart is empty</h1>
                        <Link href="/" >
                            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 cursor-pointer transition">
                                Go back to shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div className="my-10 tracking-wider">
                            <h1 className="text-4xl font-bold">Your Carts</h1>
                            <p className="mt-2 text-lg">
                                There are{" "}
                                <span className="font-bold text-primary">{cart?.length}</span> items in
                                your cart
                            </p>
                        </div>

                        <div className="my-3 grid grid-cols-8 gap-4 items-start">
                            <div className="col-span-8 lg:col-span-6">
                                <div className="hidden lg:grid grid-cols-2 py-6">
                                    <div className="text-lg font-bold leading-8">Product</div>
                                    <p className="font-bold text-lg leading-8 flex items-center justify-between">
                                        <span className="w-full max-w-[200px] text-center">Price</span>
                                        <span className="w-full max-w-[260px] text-center">Quantity</span>
                                        <span className="w-full max-w-[200px] text-center">Total</span>
                                    </p>
                                </div>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
                                    >
                                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full">
                                            <div className="relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="xl:w-[140px] rounded-xl object-cover"
                                                />
                                                <button
                                                    onClick={() => {
                                                        removeFromCart(item.id);
                                                        toast.success("Product removed from cart!");
                                                    }}
                                                    className="absolute top-1/2 -left-10 text-xl z-50 cursor-pointer"
                                                >
                                                    <Trash />
                                                </button>
                                            </div>
                                            <div className="pro-data w-full max-w-sm">
                                                <h5 className="font-semibold text-xl leading-8 text-black">
                                                    {item.name}
                                                </h5>
                                                <p className="text-lg text-gray-500 my-2">Qty: {item.quantity}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center flex-col min-[550px]:flex-row w-full gap-2">
                                            <p className="text-xl w-full max-w-[176px] text-center">
                                                €{item.price}
                                            </p>
                                            <div className="flex items-center w-full justify-center">
                                                <div className="flex items-center gap-5 w-40 justify-center py-2 bg-primary rounded-full shadow-sm shadow-primary">
                                                    <button
                                                        onClick={() => {
                                                            if (item.quantity > 1) {
                                                                decreaseQuantity(item.id);
                                                            }
                                                        }}
                                                        className="bg-primary text-primary-foreground px-1 py-1 cursor-pointer"
                                                    >
                                                        <Minus size={23} />
                                                    </button>
                                                    <span className="text-white font-bold">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="bg-primary text-primary-foreground px-1 py-1 rounded-lg cursor-pointer"
                                                    >
                                                        <Plus size={23} />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-primary font-bold text-2xl w-full max-w-[176px] text-center">
                                                €{(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right (summary) */}
                            <div className="w-80 p-8 bg-primary tracking-wider text-primary-foreground rounded-xl">
                                <h1 className="text-2xl font-bold">Cart Totals</h1>
                                <h2 className="my-4 text-sm font-bold flex justify-between">
                                    Subtotal <span>€{subTotal.toFixed(2)}</span>
                                </h2>
                                <hr />
                                <h2 className="my-4 text-sm font-bold flex justify-between">
                                    Shipping <span>Calculate Shipping</span>
                                </h2>
                                <hr />
                                <h2 className="my-4 text-xl font-bold flex justify-between">
                                    Total <span>€{subTotal.toFixed(2)}</span>
                                </h2>
                                <Link href="/checkout"
                                >
                                    <button className="mt-4 w-full py-2 rounded-md bg-white text-primary font-bold cursor-pointer hover:bg-gray-100 transition">
                                        Checkout
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        clearCart();
                                        toast.success("Cart cleared!");
                                    }}
                                    className="mt-2 cursor-pointer w-full py-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-600 transition"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

CartComponents.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default CartComponents;
