import { createStore } from 'zustand/vanilla';
import { createJSONStorage, persist } from 'zustand/middleware';

export type CartItem = {
    item: Item;
    count: number;
};

export type CartState = {
    cartItems: CartItem[];
};

export type CartActions = {
    addToCart: (item: Item, count?: number) => void;
    clearCart: () => void;
    removeItem: (item: Item) => void;
    removeItems: (item: Item) => void;
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

                addToCart: (item, count = 1) => {
                    const existingItem = get().cartItems.find(
                        (i) => i.item.name === item.name
                    );
                    if (existingItem) {
                        set((state) => ({
                            cartItems: state.cartItems.map((i) =>
                                i.item.name === item.name
                                    ? { ...i, count: i.count + count }
                                    : i
                            ),
                        }));
                    } else {
                        set((state) => ({
                            cartItems: [...state.cartItems, { item, count }],
                        }));
                    }
                },

                removeItem: (item) => {
                    set((state) => ({
                        cartItems: state.cartItems
                            .map((i) =>
                                i.item.name === item.name
                                    ? { ...i, count: i.count - 1 }
                                    : i
                            )
                            .filter((i) => i.count > 0),
                    }));
                },

                removeItems(item) {
                    set((state) => ({
                        cartItems: state.cartItems.filter(
                            (i) => i.item.name !== item.name
                        ),
                    }));
                },

                clearCart: () => {
                    set({ cartItems: [] });
                },

                getCartLength: () =>
                    get().cartItems.reduce((total, i) => total + i.count, 0),
            }),
            {
                name: 'cart-storage',
                storage: createJSONStorage(() => localStorage), // ✅ Proper adapter
                partialize: (state) => ({ cartItems: state.cartItems }),
            }
        )
    );
};
