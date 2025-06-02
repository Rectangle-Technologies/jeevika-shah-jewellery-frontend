"use client";
import React from "react";
import { getUserDetails } from "@/utils/functions/user";
import CheckoutSkeleton from "./CheckoutSkeleton";
import CheckoutForm from "./CheckoutForm";
import { ToastContainer } from "react-toastify";

function RightSection() {
	const [user, setUser] = React.useState<User | null>(null);
	const [loadingUserData, setLoadingUserData] = React.useState<boolean>(true);

	React.useEffect(() => {
		const fetchUserDetails = async () => {
			const userDetails = await getUserDetails();
			setUser(userDetails);
			setLoadingUserData(false);
		};
		fetchUserDetails();
	}, []);

	return (
		<section className="w-full lg:w-1/2 h-full px-1  lg:p-4">
			{loadingUserData ? (
				// Skeleton UI
				<CheckoutSkeleton />
			) : (
				<div>
					<CheckoutForm userDetails={user!} />
				</div>
			)}
			<ToastContainer />
		</section>
	);
}

export default RightSection;
