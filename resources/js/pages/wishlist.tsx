import AppLayout from "@/layouts/app-layout";
import { Plus, Trash } from "lucide-react";

const WishlistPage = () => {
    return (
        <section className="w-10/12 mx-auto min-h-screen pt-20">
            <div className="my-10 tracking-wider">
                <h1 className="text-4xl font-bold">Your Wishlist</h1>
                <p className="mt-2 text-lg">
                    You have <span className="font-bold text-primary">3</span> items in your wishlist
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative group"
                    >
                        <img
                            src="https://pagedone.io/asset/uploads/1701162850.png"
                            alt="Wishlist product"
                            className="w-full h-60 object-cover rounded-t-xl"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-1">Latest N-5 Perfuam</h2>
                            <p className="text-gray-500 mb-2">Category: Perfumes</p>
                            <p className="text-lg font-bold text-primary mb-4">€15.00</p>
                            <div className="flex justify-between items-center">
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition">
                                    <Plus size={18} />
                                    <span>Add to Cart</span>
                                </button>
                                <button className="text-red-500 hover:text-red-700 transition">
                                    <Trash size={22} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

WishlistPage.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
export default WishlistPage;
