"use client";
import React, { useEffect, useState } from "react";
import LeftSection from "@/components/checkout/LeftSection";
import RightSection from "@/components/checkout/RightSection";
import { getOrderDetails } from "@/utils/functions/order";
import { useSearchParams } from "next/navigation";
import { decodeMsg } from "@/utils/functions/order/encode";

function CheckOutPage() {
	const searchParams = useSearchParams();
	const [orderDetails, setOrderDetails] = useState<any>(null);

	const isOrderPaymentPending = decodeMsg(searchParams.get("isOrderPaymentPending") || "") === "true";
	const orderId = searchParams.get("orderId");

	useEffect(() => {
		const fetchOrderDetails = async () => {
			if (orderId) {
				const token = localStorage.getItem("at") || "";
				const details = await getOrderDetails(orderId, token);
				setOrderDetails(details);
			}
		};
		fetchOrderDetails();
	}, [orderId]);

	return (
		<div className="flex flex-col-reverse lg:flex-row mt-6 gap-4">
			{/* left section */}
			<LeftSection orderItems={isOrderPaymentPending ? orderDetails?.products : undefined} />

			{/* right section */}
			<RightSection isPaymentPending={isOrderPaymentPending} orderId={orderId || undefined} />
		</div>
	);
}

export default CheckOutPage;
