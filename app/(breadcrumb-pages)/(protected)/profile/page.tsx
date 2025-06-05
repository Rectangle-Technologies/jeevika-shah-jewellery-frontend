"use client";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { getPreviousOrders, getUserDetails } from "@/utils/functions/user";
import { ShoppingBagIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import OrderAccordion from "@/components/profile/OrderAccordion";
import { Separator } from "@/components/ui/separator";

function ProfilePage() {
	const [previousOrders, setPreviousOrders] = React.useState<OrderProduct[]>([]);
	const [userDetails, setUserDetails] = React.useState<User | null>(null);

	React.useEffect(() => {
		const fetchUserDetails = async () => {
			const userDetails = await getUserDetails();
			setUserDetails(userDetails);
		};
		const fetchPreviousOrders = async () => {
			const previousOrders = await getPreviousOrders(1, 10);
			setPreviousOrders(previousOrders);
		};
		fetchUserDetails();
		fetchPreviousOrders();
	}, []);

	return (
		<div className=" flex flex-col items-center gap-5">
			<ProfileHeader />
			{previousOrders.length === 0 && (
				<div className="h-full flex flex-col items-center justify-center gap-4 lg:gap-8 text-md lg:text-2xl min-h-[40vh]">
					<ShoppingBagIcon height={140} width={140} className="hidden lg:flex" />
					<ShoppingBagIcon height={50} width={50} className="lg:hidden" />
					<p className="">No previous orders found.</p>
				</div>
			)}
			{previousOrders.length > 0 && (
				<div className=" w-full flex flex-col gap-2">
					{previousOrders.map((order, index) => (
						<div className="" key={order._id}>
							<OrderAccordion order={order} index={previousOrders.length - index} />
							<Separator />
						</div>
					))}
				</div>
			)}
			<div className="w-full flex flex-col gap-4 lg:gap-8 mt-10">
				<p className="text-2xl">Customer Details</p>
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-3/5 lg:w-2/5">
					<div className="">
						<p>First Name:</p>
						{!userDetails ? <Skeleton className="h-6 w-24" /> : <p className="text-gray-700">{userDetails.name.split(" ")[0]}</p>}
					</div>
					<div className="">
						<p>Last Name:</p>
						{!userDetails ? (
							<Skeleton className="h-6 w-24" />
						) : (
							<p className="text-gray-700">
								{userDetails.name.split(" ").length > 1 &&
									userDetails.name
										.split(" ")
										.map((name) => name)
										.slice(1)
										.join(" ")}
							</p>
						)}
					</div>
				</div>
				<div className="">
					<p>Email:</p>
					{!userDetails ? <Skeleton className="h-6 w-48" /> : <p className="text-gray-700">{userDetails.email ? userDetails.email : "Not Provided"}</p>}
				</div>
				<div className="">
					<p>Address:</p>
					{!userDetails ? (
						<Skeleton className="h-6 w-64" />
					) : (
						userDetails.address && (
							<p className="text-gray-700">
								{userDetails.address.line1}, {userDetails.address.line2}, {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.country}, {userDetails.address.zip}
							</p>
						)
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
