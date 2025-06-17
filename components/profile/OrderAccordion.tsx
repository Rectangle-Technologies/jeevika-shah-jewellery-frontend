import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { createRazorpayOrder, updateOrderStatus, updatePaymentDetails, verifyPaymentSignature } from "@/utils/functions/checkout";
import { encodeMsg } from "@/utils/functions/order/encode";
import { useRouter } from "next/navigation";

interface OrderAccordionProps {
	order: OrderProduct;
	index: number;
}
function OrderAccordion({ order, index }: OrderAccordionProps) {
	const [isPaymentBeingProcessed, setIsPaymentBeingProcessed] = React.useState(false);
	const router = useRouter();

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

				setIsPaymentBeingProcessed(false);

				// 10. Redirect to confirmation with success
				router.push(`/order-status?success=${encodeMsg("Your order has been placed successfully.")}&orderId=${orderId}`);
			},
			prefill: {
				name: order.receiverDetails.name,
				contact: order.receiverDetails.phone,
			},
			notes: {
				address: `${order.receiverDetails.address?.line1}, ${order.receiverDetails.address?.city}, ${order.receiverDetails.address?.state}, ${order.receiverDetails.address?.country}, ${order.receiverDetails.address?.zip}`,
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
			};
			document.body.appendChild(script);
		}
	};

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1" className=" rounded-md px-2">
				<AccordionTrigger className="">
					<div className="w-full flex flex-col md:flex-row gap-2 items-start justify-between ">
						<p>Order #{order._id}</p>
						<div className="flex items-center gap-2">
							<Badge variant="secondary">{order.status}</Badge>
							<Badge variant="outline">Payment {order.paymentStatus}</Badge>
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent className="space-y-3">
					{/* receiver's detail */}
					<div className="flex flex-col gap-2">
						<p>Name: {order.receiverDetails.name}</p>
						<p>Phone: {order.receiverDetails.phone}</p>
						<p>
							Address: {order.receiverDetails.address.line1}, {order.receiverDetails.address.city}, {order.receiverDetails.address.state}, {order.receiverDetails.address.country}, {order.receiverDetails.address.zip}
						</p>
					</div>
					{/* order details */}
					<div className="">
						<p>Order Details:</p>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead></TableHead>
									<TableHead>Product Name</TableHead>
									<TableHead>Quantity</TableHead>
									<TableHead>Size</TableHead>
									<TableHead>Price (&#8377;)</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.products.map((item, index) => (
									<TableRow key={item._id}>
										<TableCell>{index + 1}</TableCell>
										<TableCell>{item.productId.name}</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell>{item.size}</TableCell>
										<TableCell>&#8377; {item.price}</TableCell>
									</TableRow>
								))}
								<TableRow>
									<TableCell></TableCell>
									<TableCell>Total:</TableCell>
									<TableCell></TableCell>
									<TableCell></TableCell>
									<TableCell>&#8377; {order.products.reduce((total, item) => total + item.price * item.quantity, 0)}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
					{/* order status */}
					<div className="flex flex-col gap-2">
						<p>Order Status: {order.status}</p>
						<p>Payment Status: {order.paymentStatus}</p>
						{order.paymentStatus.toLowerCase() === "pending" && (
							<Button
								onClick={() => {
									paymentHandler(order._id);
								}}
								className="w-full mx-auto md:w-[200px] cursor-pointer"
								variant={"secondary"}
							>
								{isPaymentBeingProcessed ? "Processing Payment..." : "Complete Payment"}
							</Button>
						)}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default OrderAccordion;
