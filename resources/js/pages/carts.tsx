import AppLayout from "@/layouts/app-layout";
import { Minus, Plus, Trash } from "lucide-react";
const CartComponents = () => {
    return (
        <section className="w-10/12 mx-auto min-h-screen pt-20">
            <div>
                <div className="my-10 tracking-wider">
                    <h1 className="text-4xl   font-bold">Your Carts</h1>
                    <p className="mt-2 text-lg">
                        There are <span className="font-bold text-primary">3</span> items in
                        your cart
                    </p>
                </div>
                <div className=" my-3 grid grid-cols-8 gap-4">
                    <div className="col-span-8 lg:col-span-6">
                        <div className="hidden lg:grid grid-cols-2 py-6">
                            <div className=" text-lg font-bold leading-8">Product</div>
                            <p className="font-bold text-lg leading-8 flex items-center justify-between">
                                <span className="w-full max-w-[200px] text-center">Price</span>
                                <span className="w-full max-w-[260px] text-center">Quantity</span>
                                <span className="w-full max-w-[200px] text-center">Total</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full  max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                <div className="relative">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1701162850.png"
                                        alt="perfume bottle image"
                                        className="xl:w-[140px] rounded-xl object-cover"
                                    />
                                    <h1 className="absolute top-1/2 -left-10 text-xl z-50">
                                        <Trash />
                                    </h1>
                                </div>

                                <div className="pro-data w-full max-w-sm ">
                                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                        Latest N-5 Perfuam
                                    </h5>
                                    <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                        Perfumes
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                <p className="  text-xl leading-9  w-full max-w-[176px] text-center">
                                    ৳15.00
                                </p>
                                <div className="flex items-center w-full mx-auto justify-center">
                                    <div className="flex items-center gap-5 w-40 justify-center py-2 bg-primary rounded-full shadow-sm shadow-primary">
                                        <h1 className="bg-primary text-primary-foreground px-1 py-1 cursor-pointer">
                                            <Minus size={23} />
                                        </h1>
                                        <span className="text-white font-bold">0</span>
                                        <h1 className="bg-primary text-primary-foreground px-1 py-1 rounded-lg cursor-pointer">
                                            <Plus size={23} />
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-primary font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                    ৳120.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 p-8 bg-primary tracking-wider text-primary-foreground rounded-xl">
                        <h1 className="text-2xl font-bold ">Carts Totals</h1>
                        <h2 className="my-4 text-sm font-bold flex justify-between">
                            Subtotal <span>৳120</span>
                        </h2>
                        <hr />
                        <h2 className="my-4 text-sm font-bold flex justify-between">
                            Shiping <span>Calculate Shiping</span>
                        </h2>
                        <hr />
                        <h2 className="my-4 text-xl font-bold flex justify-between">
                            Total <span>৳120</span>
                        </h2>
                        {/* <Button variant="outline" size="full">
            Checkout
          </Button> */}
                    </div>
                </div>
            </div>
        </section>

    );
};
CartComponents.layout = (page: React.ReactNode) => <AppLayout children={page} />;
export default CartComponents;
