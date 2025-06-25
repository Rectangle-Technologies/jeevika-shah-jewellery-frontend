"use client";
import CartSheetItemCard from "@/components/cart/CartSheetItemCard";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/providers/cart-store-providers";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { calculatePricing } from "js-product-pricing-calculator";
import { getProductDetails, MetalPrices } from "@/utils/functions/product";
import { computeDiamondType } from "@/utils/functions/image";

function CartPage() {
	const [subTotal, setSubTotal] = React.useState(0);
	const [metalPrices, setMetalPrices] = React.useState<MetalPrices | undefined>(undefined);
	const { cartItems } = useCounterStore((state) => state);

	React.useEffect(() => {
		const calculateTotal = async () => {
			const promises = cartItems.map(async (item) => {
				const sizeObj = item.item.sizes.find((jewellerySize) => jewellerySize.displayName === item.size);
				const details = await getProductDetails(item.item._id);
				const metalPrice = details?.metalPrices;
				setMetalPrices(metalPrice);
				const price = calculatePricing(item.item, metalPrice, sizeObj, computeDiamondType(item.diamondType)).finalPrice;
				return item.quantity * price;
			});

			const prices = await Promise.all(promises);
			const total = prices.reduce((sum, price) => sum + price, 0);
			setSubTotal(total);
		};

		calculateTotal();
	}, [cartItems]);
	return (
		<div className="w-full py-3 mx-auto space-y-8">
			<p className="text-3xl font-semibold my-5">Shopping Cart</p>
			{cartItems.length === 0 && (
				<div className="h-full flex flex-col items-center justify-center gap-8">
					<ShoppingCartIcon height={70} width={70} />
					<p className="">Your cart is empty</p>
					<Button asChild className="mt-4">
						<Link href="/collections/all">Shop Now</Link>
					</Button>
				</div>
			)}
			{cartItems.length > 0 && (
				<div className="px-2 space-y-8">
					{cartItems.map((item) => (
						<CartSheetItemCard key={item.item.name} metalPrices={metalPrices} cartItem={item} />
					))}
				</div>
			)}
			{cartItems.length > 0 && (
				<div>
					<div className="flex justify-between items-end text-lg text-gray-500 border-y py-3 my-2">
						<p>Subtotal:</p>
						<p className="">&#8377; {subTotal.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
					</div>
					<div className="flex flex-row gap-4 items-center justify-between my-10">
						<Link href="/collections/all" className="hover:underline cursor-pointer">
							Continue Shopping
						</Link>
						<Button asChild>
							<Link href="/checkout">Proceed to Checkout</Link>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartPage;
