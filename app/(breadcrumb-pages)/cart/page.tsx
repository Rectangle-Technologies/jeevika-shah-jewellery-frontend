"use client";
import CartSheetItemCard from "@/components/cart/CartSheetItemCard";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/providers/cart-store-providers";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartPage() {
	const { cartItems } = useCounterStore((state) => state);
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
						<CartSheetItemCard key={item.item.name} cartItem={item} />
					))}
				</div>
			)}
			{cartItems.length > 0 && (
				<div>
					<div className="flex justify-between items-end text-lg text-gray-500 border-y py-3 my-2">
						<p>Subtotal:</p>
						<p className="">$ {cartItems.reduce((total, item) => total + item.count * (item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost), 0)}</p>
					</div>
					<div className=" flex flex-col gap-4 items-end">
						<Link href="/collections/all">Continue Shopping</Link>
						<Button>Proceed to Checkout</Button>
						<div className="text-sm">
							<p>
								Taxes and{" "}
								<Link href="" className="underline cursor-pointer">
									shipping
								</Link>{" "}
								calculated at checkout.
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartPage;
