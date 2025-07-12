"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrderDetails } from "@/utils/functions/order";
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter } from "@/components/ui/table";
import { decodeMsg, encodeMsg } from "@/utils/functions/order/encode";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import { createRazorpayOrder, formatDiamondType, updateOrderStatus, updatePaymentDetails, verifyPaymentSignature } from "@/utils/functions/checkout";
import { Button } from "@/components/ui/button";

function OrderStatusPage() {
	const [order, setOrder] = React.useState<OrderProduct | null>(null);
	const searchParams = useSearchParams();
	const [isPaymentBeingProcessed, setIsPaymentBeingProcessed] = React.useState(false);
	const router = useRouter();

	const orderId = searchParams.get("orderId");
	const success = searchParams.get("success");
	const warning = searchParams.get("warning");
	const error = searchParams.get("error");

	React.useEffect(() => {
		const fetchOrderDetails = async () => {
			if (orderId) {
				const token = localStorage.getItem("at") || "";
				const order = await getOrderDetails(orderId, token);
				// const order = await getOrderDetails("684021e1c6a3d1c8a89f5def", token);
				setOrder(order);
			}
		};
		fetchOrderDetails();
	}, [orderId]);

	const paymentHandler = async (orderId: string) => {
		setIsPaymentBeingProcessed(true);
		// 3. Create Razorpay order
		const razorpayRes = await createRazorpayOrder(orderId || "");
		if (!razorpayRes.isOrderCreated || !razorpayRes.razorpayOrderId) {
			router.push(`/order-status?error=${encodeMsg("There was an error completing the payment. Don't worry your order has been successfully placed, you can complete your payment here.")}&orderId=${orderId}`);
			return;
		}

		// 5. Open Razorpay checkout
		const options = {
			key: razorpayRes.razorpayKey,
			amount: razorpayRes.amount, // You should calculate the total amount here
			currency: razorpayRes.currency,
			name: "Jeevika Shah",
			description: "Order Payment",
			image: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logo-seconday.webp`,
			order_id: razorpayRes.razorpayOrderId,
			handler: async function (response: any) {
				// 6. Verify payment signature
				const verifyRes = await verifyPaymentSignature(razorpayRes.razorpayOrderId!, response.razorpay_payment_id, response.razorpay_signature);
				if (!verifyRes.isPaymentVerified) {
					router.push(`/order-status?error=${encodeMsg("There was an error completing the payment. Don't worry your order has been successfully placed, you can complete your payment here.")}&orderId=${orderId}`);
					return;
				}

				// 8. Update payment details
				await updatePaymentDetails(orderId!, response.razorpay_payment_id);

				// 9. Send confirmation
				await updateOrderStatus(orderId!, "confirmed");

				// 10. Redirect to confirmation with success
				router.push(`/order-status?success=${encodeMsg("Your order has been placed successfully.")}&orderId=${orderId}`);
			},
			prefill: {
				name: order?.receiverDetails.name,
				contact: order?.receiverDetails.phone,
			},
			notes: {
				address: `${order?.receiverDetails.address?.line1}, ${order?.receiverDetails.address?.city}, ${order?.receiverDetails.address?.state}, ${order?.receiverDetails.address?.country}, ${order?.receiverDetails.address?.zip}`,
			},
			theme: {
				color: "#F5CBA7",
			},
		};

		// Load Razorpay script if not already loaded
		if (typeof window !== "undefined") {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.async = true;
			script.onload = () => {
				// @ts-ignore
				const rzp = new window.Razorpay(options);
				rzp.open();
				setIsPaymentBeingProcessed(false);
			};
			document.body.appendChild(script);
		}
	};

	return (
		<div>
			{(success || warning) && (
				<div className="success-animation my-10 flex flex-col items-center gap-3">
					<section className="c-container">
						<div className="o-circle c-container__circle o-circle__sign--success">
							<div className="o-circle__sign"></div>
						</div>
					</section>
					<p className="text-2xl font-semibold mt-5">Thank you for your order!</p>
					{success && <p className="text-center">{decodeMsg(success)}</p>}
					{warning && <p className="text-center text-yellow-700">{decodeMsg(warning)}</p>}
				</div>
			)}
			{error && (
				<div className="error-animation my-10 flex flex-col items-center gap-3">
					<section className="c-container">
						<div className="o-circle c-container__circle o-circle__sign--failure">
							<div className="o-circle__sign"></div>
						</div>
					</section>
					<p className="text-2xl font-semibold mt-5">Something went wrong</p>
					<p className="text-center text-red-500">{decodeMsg(error)}</p>
				</div>
			)}
			{(success || warning) && (
				<Card className="lg:w-[800px] mx-auto">
					<CardHeader>
						<CardTitle>Order Details</CardTitle>
					</CardHeader>
					<CardContent>
						{!order ? (
							<div className="space-y-4">
								<Skeleton className="h-6 w-1/2" />
								<Skeleton className="h-6 w-full" />
								<Skeleton className="h-6 w-full" />
								<Skeleton className="h-6 w-full" />
								<div className="mt-6 space-y-2">
									<Skeleton className="h-5 w-3/4" />
									<Skeleton className="h-5 w-3/4" />
									<Skeleton className="h-5 w-3/4" />
								</div>
							</div>
						) : (
							<>
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className="font-medium">Order ID</TableCell>
											<TableCell>{order._id}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Name</TableCell>
											<TableCell>{order.receiverDetails.name}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Phone</TableCell>
											<TableCell>{order.receiverDetails.phone}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-medium">Address</TableCell>
											<TableCell>
												{order.receiverDetails.address.line1}, {order.receiverDetails.address.line2 && order.receiverDetails.address.line2 + ", "} {order.receiverDetails.address.city}, {order.receiverDetails.address.state}, {order.receiverDetails.address.country},{" "}
												{order.receiverDetails.address.zip}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<div className="mt-6">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Product Name</TableHead>
												<TableHead>Price (&#8377;)</TableHead>
												<TableHead>Quantity</TableHead>
												<TableHead>Size</TableHead>
												<TableHead>Diamond Type</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{order.products.map((item) => (
												<TableRow key={item._id}>
													<TableCell>{item.productId.name}</TableCell>
													<TableCell>&#8377; {item.price.toLocaleString("en-IN", { minimumFractionDigits: 0 })}</TableCell>
													<TableCell>{item.quantity}</TableCell>
													<TableCell>{item.size}</TableCell>
													<TableCell>{formatDiamondType(item.diamondType)}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
									<div className="w-full flex flex-col items-center">
										{order.paymentStatus.toLowerCase() === "pending" && (
											<Button
												onClick={() => {
													paymentHandler(order._id);
												}}
												className="w-full mx-auto mt-4 md:w-[200px] cursor-pointer"
												variant={"secondary"}
												disabled={isPaymentBeingProcessed}
											>
												{isPaymentBeingProcessed ? "Processing Payment..." : "Complete Payment"}
											</Button>
										)}
									</div>
								</div>
							</>
						)}
					</CardContent>
				</Card>
			)}
		</div>
	);
}

export default OrderStatusPage;
