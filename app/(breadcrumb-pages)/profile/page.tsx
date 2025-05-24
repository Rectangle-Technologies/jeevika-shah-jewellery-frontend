import { Button } from "@/components/ui/button";
import { LogOutIcon, MoveRightIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

async function ProfilePage() {
	const previousOrders = [];
	const userDetails: User = {
		name: "Virat Kohli",
		email: "virat.kohli@example.com",
		phone: "1234567890",
		address: {
			line1: "line1",
			line2: "line2",
			city: "city",
			state: "state",
			country: "country",
			zip: "zip",
		},
	};
	return (
		<div className=" flex flex-col items-center gap-5">
			<div className="flex items-center justify-between w-full mt-5">
				<p className="text-3xl">Account</p>
				<Button variant={"link"}>
					<LogOutIcon />
					Logout
				</Button>
			</div>
			{previousOrders.length === 0 && (
				<div className="h-full flex flex-col items-center justify-center gap-4 lg:gap-8 text-md lg:text-2xl min-h-[40vh]">
					<ShoppingBagIcon height={140} width={140} className="hidden lg:flex"/>
					<ShoppingBagIcon height={50} width={50} className="lg:hidden"/>
					<p className="">No previous orders found.</p>
				</div>
			)}
			<div className="w-full flex flex-col gap-4 lg:gap-8 mt-10">
				<p className="text-2xl">Customer Details</p>
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-3/5 lg:w-2/5">
					<div className="">
						<p>First Name:</p>
						<p className="text-gray-700">{userDetails.name.split(" ")[0]}</p>
					</div>
					<div className="">
						<p>Last Name:</p>
						<p className="text-gray-700">{userDetails.name.split(" ")[1] && userDetails.name.split(" ")[1]}</p>
					</div>
				</div>
				<div className="">
					<p>Email:</p>
					<p className="text-gray-700">{userDetails.email}</p>
				</div>
				<div className="">
					<p>Address:</p>
					{userDetails.address && (
						<p className="text-gray-700">
							{userDetails.address.line1}, {userDetails.address.line2}, {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.country}, {userDetails.address.zip}
						</p>
					)}
				</div>
				{/* <Link href={"/profile/addresses"} className="flex items-center gap-2">
					View Addresses <MoveRightIcon />
				</Link> */}
			</div>
		</div>
	);
}

export default ProfilePage;
