"use client";
import { useCounterStore } from "@/providers/cart-store-providers";
import React from "react";
import CheckoutItem from "./CheckoutItem";

function LeftSection() {
	const { cartItems } = useCounterStore((state) => state);
	return (
		<section className="w-full lg:w-1/2 h-full px-1 pt-4 lg:p-4 ">
			<p className="text-xl font-semibold my-2">Order Summary</p>
			{/* products in cart */}
			<div className="">
				{cartItems.map((item) => (
					<CheckoutItem key={item.item.name} item={item} />
				))}
			</div>
			{/* total amount */}
			<div className="flex items-center justify-between p-4 text-lg font-semibold">
				<p className="">Total</p>
				<p>USD {cartItems.reduce((total, item) => total + item.quantity * (item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost), 0).toFixed(2)}</p>
			</div>
		</section>
	);
}

export default LeftSection;
