"use client";
import React from "react";

export interface StoreContextType {
	cartItems: Item[];
	addToCart: (item: Item) => void;
	getCartLength: () => number;
	clearCart: () => void;
	removeItem: (item: Item) => void;
}

const StoreContext = React.createContext<StoreContextType>({
	cartItems: [],
	addToCart: () => {},
	getCartLength: () => 0,
	clearCart: () => {},
	removeItem: () => {},
});

function StoreProvider({ children }: any) {
	const [cartItems, setCartItems] = React.useState<Item[]>([]);

	const addToCart = (item: Item) => {
		setCartItems((prev) => [...prev, item]);
	};

	const getCartLength = () => {
		return cartItems.length;
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const removeItem = (item: Item) => {
		setCartItems((prev) => prev.filter((i) => i.id !== item.id));
	};

	return <StoreContext.Provider value={{ cartItems, addToCart, getCartLength, clearCart, removeItem }}>{children}</StoreContext.Provider>;
}

export { StoreContext, StoreProvider };
