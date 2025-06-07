"use client";
import { useCounterStore } from "@/providers/cart-store-providers";
import React from "react";
import CheckoutItem from "./CheckoutItem";

interface LeftSectionProps {
	orderItems?: {
		productId: {
			_id: string;
			name: string;
			images: string[];
		};
		quantity: number;
		price: number;
		size: string;
		diamondType: string;
		_id: string;
	}[];
}

const itemModifier = (item: IndividualCartItem) => {
	const modifiedItem = {
		productId: {
			_id: item.item._id,
			name: item.item.name,
			images: item.item.images,
		},
		quantity: item.quantity,
		price: item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost,
		size: item.size,
		diamondType: item.diamondType,
		_id: item.item._id,
	};
	return modifiedItem;
};

function LeftSection({ orderItems }: LeftSectionProps) {
	const { cartItems } = useCounterStore((state) => state);
	return (
		<section className="w-full lg:w-1/2 h-full px-1 pt-4 lg:p-4 ">
			<p className="text-xl font-semibold my-2">Order Summary</p>
			{/* products in cart */}
			{orderItems ? (
				<div className="space-y-4">
					{orderItems.map((item) => (
						<CheckoutItem key={item._id} item={item} />
					))}
				</div>
			) : (
				<div className="space-y-4">
					{cartItems.map((item) => (
						<CheckoutItem key={item.item.name} item={itemModifier(item)} />
					))}
				</div>
			)}
			{/* total amount */}
			<div className="flex items-center justify-between p-4 text-lg font-semibold mb-10">
				<p className="">Total</p>
				{orderItems ? (
					<p>&#8377; {orderItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</p>
				) : (
					<p>&#8377; {cartItems.reduce((total, item) => total + item.quantity * (item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost), 0).toFixed(2)}</p>
				)}
			</div>
		</section>
	);
}

export default LeftSection;
