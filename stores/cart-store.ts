import { createStore } from 'zustand/vanilla';
import { createJSONStorage, persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'react-toastify';

export type CartState = {
    cartItems: IndividualCartItem[];
};

export type CartActions = {
    addToCart: (itemId: string, item: Item, size: string, type: string, count?: number,) => Promise<void>;
    removeItems: (item: Item) => Promise<void>;
    getCartLength: () => number;
};

export type CartStore = CartState & CartActions;

export const defaultCartState: CartState = {
    cartItems: [],
};

export const createCartStore = (
    initState: CartState = defaultCartState
) => {
    return createStore<CartStore>()(
        persist(
            (set, get) => ({
                ...initState,

                addToCart: async (itemId, item, size, type, count = 1) => {
                    const existingItem = get().cartItems.find(
                        (i) => i.productId === itemId
                    );

                    // make an api call to update the cart as well if user is logged in
                    const token = localStorage.getItem("at");
                    if (token) {
                        const res = await axios.post(
                            `${process.env.NEXT_PUBLIC_API_URL}/cart/add-product`,
                            {
                                productId: itemId,
                                quantity: count,
                                size,
                                diamondType: type,
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        )
                        if (res.status !== 200) {
                            toast.error(res.data.message);
                            return;
                        }
                    }
                    if (existingItem) {
                        set((state) => ({
                            cartItems: state.cartItems.map((i) =>
                                i.productId === itemId
                                    ? { ...i, quantity: i.quantity + count }
                                    : i
                            ),
                        }));
                    } else {
                        set((state) => ({
                            cartItems: [...state.cartItems, { productId: itemId, quantity: count, size, diamondType: type, item }],
                        }));
                    }
                },
                async removeItems(item) {
                    // make an api call to update the cart as well if user is logged in
                    const token = localStorage.getItem("at");
                    if (token) {
                        const res = await axios.post(
                            `${process.env.NEXT_PUBLIC_API_URL}/cart/remove-product`,
                            {
                                productId: item._id,
                                action: "delete",
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        )
                        if (res.status !== 200) {
                            toast.error(res.data.message);
                            return;
                        }
                    }
                    set((state) => ({
                        cartItems: state.cartItems.filter(
                            (i) => i.productId !== item._id
                        ),
                    }));
                },
                getCartLength: () =>
                    get().cartItems.reduce((total, i) => total + i.quantity, 0),
            }),
            {
                name: 'cart-storage',
                storage: createJSONStorage(() => localStorage), // ✅ Proper adapter
                partialize: (state) => ({ cartItems: state.cartItems }),
            }
        )
    );
};
