"use client";
import { useCounterStore } from "@/providers/cart-store-providers";
import React from "react";
import CheckoutItem from "./CheckoutItem";
import { centralPricing } from "@/constants";
import { calculatePricing } from "js-product-pricing-calculator";
import { getProductDetails } from "@/utils/functions/product";

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

const itemModifier = async (item: IndividualCartItem) => {
	const details = await getProductDetails(item.item._id);
	const modifiedItem = {
		productId: {
			_id: item.item._id,
			name: item.item.name,
			images: item.item.images,
		},
		quantity: item.quantity,
		price: calculatePricing(
			item.item,
			details?.metalPrices,
			item.item.sizes.find((size) => size.displayName === item.size),
			item.diamondType
		).finalPrice,
		size: item.size,
		diamondType: item.diamondType,
		_id: item.item._id,
	};
	return modifiedItem;
};

function LeftSection({ orderItems }: LeftSectionProps) {
	const { cartItems } = useCounterStore((state) => state);
	const [modifiedItems, setModifiedItems] = React.useState<any[]>([]); // Adjust type as needed

	React.useEffect(() => {
		const modifyItems = async () => {
			const results = await Promise.all(cartItems.map((item) => itemModifier(item)));
			setModifiedItems(results);
		};

		modifyItems();
	}, [cartItems]);
	return (
		<section className="w-full lg:w-1/2 h-full px-1 pt-4 lg:p-4 ">
			<p className="text-xl font-semibold my-2">Order Summary</p>
			<div className="space-y-4">
				{modifiedItems.map((item) => (
					<CheckoutItem key={item.productId._id} item={item} />
				))}
			</div>
			{/* total amount */}
			<div className="flex items-center justify-between p-4 text-lg font-semibold mb-10">
				<p className="">Total</p>
				{orderItems ? <p>&#8377; {orderItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</p> : <p>&#8377; {modifiedItems.reduce((total, item) => total + item.quantity * item.price, 0).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>}
			</div>
		</section>
	);
}

export default LeftSection;
