"use client";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { getPreviousOrders, getUserDetails } from "@/utils/functions/user";
import { ShoppingBagIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import OrderAccordion from "@/components/profile/OrderAccordion";
import { Separator } from "@/components/ui/separator";
import ProfileDetails from "@/components/profile/ProfileDetails";

function ProfilePage() {
	const [previousOrders, setPreviousOrders] = React.useState<OrderProduct[]>([]);
	const [userDetails, setUserDetails] = React.useState<User | null>(null);
	const [ordersLoading, setOrdersLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchUserDetails = async () => {
			const userDetails = await getUserDetails();
			setUserDetails(userDetails);
		};
		const fetchPreviousOrders = async () => {
			setOrdersLoading(true);
			const previousOrders = await getPreviousOrders(1, 10);
			setPreviousOrders(previousOrders);
			setOrdersLoading(false);
		};
		fetchUserDetails();
		fetchPreviousOrders();
	}, []);

	return (
		<div className=" flex flex-col items-center gap-5">
			<ProfileHeader />
			{ordersLoading ? (
				// 4. Show skeletons while loading
				<div className="w-full flex flex-col gap-2">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="flex flex-col gap-2">
							<Skeleton className="h-10 w-full" />
							<Skeleton className="h-6 w-1/2" />
							<Separator />
						</div>
					))}
				</div>
			) : previousOrders.length === 0 ? (
				<div className="h-full flex flex-col items-center justify-center gap-4 lg:gap-8 text-md lg:text-2xl min-h-[40vh]">
					<ShoppingBagIcon height={140} width={140} className="hidden lg:flex" />
					<ShoppingBagIcon height={50} width={50} className="lg:hidden" />
					<p className="">No previous orders found.</p>
				</div>
			) : (
				<div className=" w-full flex flex-col gap-2">
					{previousOrders.map((order, index) => (
						<div className="" key={order._id}>
							<OrderAccordion order={order} index={previousOrders.length - index} />
							<Separator />
						</div>
					))}
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
			<ProfileDetails userDetails={userDetails} />
		</div>
	);
}

export default ProfilePage;
