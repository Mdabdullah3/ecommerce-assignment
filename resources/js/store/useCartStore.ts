import { Product } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem extends Product {
    quantity: number;
    price: number;
    id: number;
    image: string;
}

interface CartState {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) => {
                const existing = get().cart.find((item) => item.id === product.id);
                if (existing) {
                    set({
                        cart: get().cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
                    });
                } else {
                    set({
                        cart: [
                            ...get().cart,
                            {
                                ...product,
                                quantity: 1,
                                image: product.image ?? '',
                                id: product.id,
                                price: product.price,
                            },
                        ],
                    });
                }
            },

            increaseQuantity: (productId) => {
                set({
                    cart: get().cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
                });
            },

            decreaseQuantity: (productId) => {
                set({
                    cart: get()
                        .cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
                        .filter((item) => item.quantity > 0),
                });
            },

            removeFromCart: (productId) => {
                set({
                    cart: get().cart.filter((item) => item.id !== productId),
                });
            },

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage', // key in localStorage
        },
    ),
);
