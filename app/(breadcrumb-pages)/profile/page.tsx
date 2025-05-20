import { Button } from "@/components/ui/button";
import { LogOutIcon, MoveRightIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

async function ProfilePage() {
	const previousOrders = [];
	const userDetails: User = {
		firstName: "Cristiano",
		lastName: "Ronaldo",
		email: "ch3xk@example.com",
	};
	return (
		<div className=" flex flex-col items-center gap-5">
			<div className="flex items-center justify-between w-full">
				<p className="text-3xl font-semibold">Account</p>
				<Button>
					<LogOutIcon />
					Logout
				</Button>
			</div>
			{previousOrders.length === 0 && (
				<div className="h-full flex flex-col items-center justify-center gap-8 text-2xl">
					<ShoppingBagIcon height={140} width={140} />
					<p className="">No previous orders found.</p>
				</div>
			)}
			<div className="w-full flex flex-col gap-8 mt-10 mb-20">
				<p className="text-2xl">Customer Details</p>
				<div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/5 lg:w-2/5">
					<div className="">
						<p>First Name:</p>
						<p className="text-gray-700">{userDetails.firstName}</p>
					</div>
					<div className="">
						<p>Last Name:</p>
						<p className="text-gray-700">{userDetails.lastName}</p>
					</div>
				</div>
				<div className="">
					<p>Email:</p>
					<p className="text-gray-700">{userDetails.email}</p>
				</div>
				<div className="">
					<p>Default Shipping Address</p>
					<p className="text-gray-700">Some random Address</p>
				</div>
				<Link href={"/profile/addresses"} className="flex items-center gap-2">
					View Addresses <MoveRightIcon />
				</Link>
			</div>
		</div>
	);
}

export default ProfilePage;
