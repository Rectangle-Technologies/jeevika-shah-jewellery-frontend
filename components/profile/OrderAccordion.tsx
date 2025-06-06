import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface OrderAccordionProps {
	order: OrderProduct;
	index: number;
}
function OrderAccordion({ order, index }: OrderAccordionProps) {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1" className=" rounded-md px-2">
				<AccordionTrigger className="">
					<div className="w-full flex items-center justify-between ">
						<p>Order #{index}</p>
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
						{order.paymentStatus.toLowerCase() === "completed" && <p>Payment ID: {order.razorpayPaymentId}</p>}
						{order.paymentStatus.toLowerCase() === "pending" && (
							<Button className="w-full mx-auto md:w-[200px]" variant={"secondary"}>
								Complete Payment
							</Button>
						)}
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default OrderAccordion;
