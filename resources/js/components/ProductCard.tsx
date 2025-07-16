import { Product } from "@/types";
import { Eye, Heart } from "lucide-react";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="">
            <div className="group [perspective:1000px]">
                <div className="w-96 h-[520px]  border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-6 flex flex-col justify-between transition-transform duration-800 [transform-style:preserve-3d] group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] group-hover:scale-[1.01]">

                    <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold bg-black text-white px-3 py-1 rounded-full">
                            PREMIUM
                        </span>
                        <button className="text-gray-500 hover:text-black transition cursor-pointer">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                    {/* Product Image */}
                    <div className="flex justify-center my-4">
                        <img
                            src={product?.image || "https://via.placeholder.com/150"}
                            alt="Headphones"
                            className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-2"
                        />
                    </div>
                    {/* Product Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-1">{product?.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{product?.description}</p>
                        {/* Ratings */}
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="flex text-yellow-400">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09L5.64 12.18.762 7.91l6.093-.885L10 1l3.145 6.025 6.093.885-4.878 4.27 1.518 5.91z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09L5.64 12.18.762 7.91l6.093-.885L10 1l3.145 6.025 6.093.885-4.878 4.27 1.518 5.91z" />
                                </svg>
                            </div>
                            <span className="text-gray-500 text-sm">4.8 (2.1k reviews)</span>
                        </div>
                        {/* Price */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-semibold text-black">
                                € {product?.price}
                            </div>
                            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">25% OFF</span>
                        </div>
                        {/* Buttons */}
                        <div className="flex space-x-3">
                            <button className="transition-all duration-300 transform hover:scale-105 flex-1 bg-black text-white py-2 rounded-xl font-semibold cursor-pointer">
                                Add to Cart
                            </button>
                            <button className="transition-all duration-300 transform hover:scale-104 cursor-pointer px-4 py-2 border border-black rounded-xl">
                                <Eye className="w-5 h-5 inline-block" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
