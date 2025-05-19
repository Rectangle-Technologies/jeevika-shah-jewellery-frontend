"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import CartSheetItemCard from "./CartSheetItemCard";
import { useCounterStore } from "@/providers/cart-store-providers";

function CartSheet() {
	const { cartItems } = useCounterStore((state) => state);
	return (
		<Sheet>
			<SheetTrigger>
				<ShoppingBagIcon className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent className="w-[300px] sm:w-[440px] md:w-[600px]">
				<SheetHeader className="text-center bg-gray-200">
					<SheetTitle>CART</SheetTitle>
				</SheetHeader>
				{cartItems.length === 0 && (
					<div className="h-full flex flex-col items-center justify-center gap-8">
						<ShoppingCartIcon height={70} width={70} />
						<p className="">Your cart is empty</p>
						<SheetClose asChild>
							<Button className="mt-4">Shop Now</Button>
						</SheetClose>
					</div>
				)}
				{cartItems.length > 0 && (
					<div className="px-2">
						{cartItems.map((item) => (
							<CartSheetItemCard key={item.item.name} cartItem={item} />
						))}
					</div>
				)}
				{cartItems.length > 0 && (
					<SheetFooter>
						<div className="flex items-center justify-between text-lg text-gray-500 border-y py-3 my-2">
							<p>Subtotal:</p>
							<p className="">$ {cartItems.reduce((total, item) => total + item.count * (item.item.costOfDiamond + item.item.costOfLabour + item.item.miscellaneousCost), 0)}</p>
						</div>
						<Button>Checkout</Button>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	);
}

export default CartSheet;
