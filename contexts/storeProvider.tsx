"use client";
import React, { useEffect, useMemo } from "react";

export interface StoreContextType {
	cartItems: { item: Item; count: number }[];
	addToCart: (item: Item) => void;
	cartLength: number;
	clearCart: () => void;
	removeItem: (item: Item) => void;
}

const StoreContext = React.createContext<StoreContextType>({
	cartItems: [],
	addToCart: () => {},
	cartLength: 0,
	clearCart: () => {},
	removeItem: () => {},
});

function StoreProvider({ children }: any) {
	const [cartItems, setCartItems] = React.useState<{ item: Item; count: number }[]>([]);

	const addToCart = (item: Item, count = 1) => {
		// check if item is already in cart, if it does, then increment is cound, else add item to cart
		const existingItem = cartItems.find((i) => i.item.name === item.name);
		if (existingItem) {
			setCartItems((prev) => prev.map((i) => (i.item.name === item.name ? { ...i, count: i.count + count } : i)));
		} else {
			setCartItems((prev) => [...prev, { item, count }]);
		}
	};

	const cartLength = useMemo(() => cartItems.reduce((total, item) => total + item.count, 0), [cartItems]);

	const clearCart = () => {
		setCartItems([]);
	};

	const removeItem = (item: Item) => {
		setCartItems((prev) => prev.map((i) => (i.item.name === item.name ? { ...i, count: i.count - 1 } : i)).filter((i) => i.count > 0));
	};

	return <StoreContext.Provider value={{ cartItems, addToCart, cartLength, clearCart, removeItem }}>{children}</StoreContext.Provider>;
}

export { StoreContext, StoreProvider };
