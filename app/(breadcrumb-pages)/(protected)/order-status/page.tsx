"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOrderDetails } from "@/utils/functions/order";
import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { decodeMsg } from "@/utils/functions/order/encode";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { formatDiamondType } from "@/utils/functions/checkout";

function OrderStatusPage() {
	const [order, setOrder] = React.useState<OrderProduct | null>(null);
	const searchParams = useSearchParams();

    const orderId = searchParams.get("orderId");
    const success = searchParams.get("success");
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

	return (
		<div>
			{success && (
				<div className="success-animation my-10 flex flex-col items-center gap-3">
					<section className="c-container">
						<div className="o-circle c-container__circle o-circle__sign--success">
							<div className="o-circle__sign"></div>
						</div>
					</section>
					<p className="text-2xl font-semibold mt-5">Thank you for your order!</p>
					<p className="text-center">{decodeMsg(success)}</p>
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
			{success && (
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
												{order.receiverDetails.address.line1}, {order.receiverDetails.address.city}, {order.receiverDetails.address.state}, {order.receiverDetails.address.country}, {order.receiverDetails.address.zip}
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
													<TableCell>&#8377; {item.price}</TableCell>
													<TableCell>{item.quantity}</TableCell>
													<TableCell>{item.size}</TableCell>
													<TableCell>{formatDiamondType(item.diamondType)}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
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
