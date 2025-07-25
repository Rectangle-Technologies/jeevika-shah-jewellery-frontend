import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { useCounterStore } from "@/providers/cart-store-providers";
import { createOrder, createRazorpayOrder, updateOrderStatus, updatePaymentDetails, verifyPaymentSignature } from "@/utils/functions/checkout";
import { useRouter } from "next/navigation";
import { encodeMsg } from "@/utils/functions/order/encode";
import ProcessingPayment from "./ProcessingPayment";

const formSchema = z.object({
	email: z.string().email().optional(),
	phone: z
		.string()
		.trim()
		.regex(/^[6-9]\d{9}$/, { message: "Phone number must be a valid 10-digit Indian number" }),
	line1: z.string().trim().min(2, { message: "Address line 1 must be at least 2 characters long" }).max(150, { message: "Address line 1 must be at most 150 characters long" }),
	line2: z.string().trim().max(150, { message: "Address line 2 must be at most 150 characters long" }).optional(),
	city: z.string().trim().min(2, { message: "City must be at least 2 characters long" }).max(50, { message: "City must be at most 50 characters long" }),
	state: z.string().trim().min(2, { message: "State must be at least 2 characters long" }).max(50, { message: "State must be at most 50 characters long" }),
	country: z.string().trim().min(2, { message: "Country must be at least 2 characters long" }).max(50, { message: "Country must be at most 50 characters long" }),
	zip: z.string().trim().min(6, { message: "Zip code must be at least 6 characters long" }).max(6, { message: "Zip code must be at most 6 digits long" }),
	recipient_name: z.string().min(2, "Name is required").optional().or(z.literal("")),
	recipient_phone: z
		.string()
		.regex(/^[6-9]\d{9}$/, { message: "Phone number must be a valid 10-digit Indian number" })
		.optional()
		.or(z.literal("")),
});

interface CheckoutFormProps {
	userDetails: User;
	isOrderPaymentPending: boolean;
	orderId?: string;
}

function CheckoutForm({ userDetails, isOrderPaymentPending, orderId }: CheckoutFormProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: userDetails.email,
			phone: userDetails.phone,
			line1: userDetails.address?.line1,
			line2: userDetails.address?.line2,
			city: userDetails.address?.city,
			state: userDetails.address?.state,
			country: userDetails.address?.country,
			zip: userDetails.address?.zip,
			recipient_name: "",
			recipient_phone: "",
		},
	});
	const { cartItems, removeItemsLocally } = useCounterStore((state) => state);
	const [orderForSomeoneElse, setOrderForSomeoneElse] = React.useState(false);
	const [processingPayment, setProcessingPayment] = React.useState(false);
	const router = useRouter();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		// 1. Create order
		const receiverDetails: ReceiverDetails = orderForSomeoneElse
			? { name: values.recipient_name!, phone: values.recipient_phone!, address: { line1: values.line1!, line2: values.line2!, city: values.city!, state: values.state!, country: values.country!, zip: values.zip! } }
			: { name: userDetails.name, phone: userDetails.phone!, address: { line1: values.line1!, line2: values.line2!, city: values.city!, state: values.state!, country: values.country!, zip: values.zip! } };

		let orderRes: { isOrderCreated: boolean; orderId?: string } = { isOrderCreated: false, orderId: "" };
		if (isOrderPaymentPending) {
			orderRes = { isOrderCreated: true, orderId: orderId };
		} else {
			orderRes = await createOrder(cartItems, receiverDetails);
			if (!orderRes.isOrderCreated || !orderRes.orderId) {
				router.push(`/order-status?error=${encodeMsg("Order could not be created, please try again later.")}`);
				return;
			}
			// remove products
			for (let i = 0; i < cartItems.length; i++) {
				removeItemsLocally(cartItems[i].item);
			}
		}

		// 3. Create Razorpay order
		const razorpayRes = await createRazorpayOrder(orderRes.orderId || "");
		if (!razorpayRes.isOrderCreated || !razorpayRes.razorpayOrderId) {
			router.push(`/order-status?warning=${encodeMsg("There was an error completing the payment. Don't worry your order has been successfully placed, you can complete your payment here.")}&orderId=${orderRes.orderId}`);
			return;
		}

		// 5. Open Razorpay checkout
		const options = {
			key: razorpayRes.razorpayKey,
			amount: razorpayRes.amount, // You should calculate the total amount here
			currency: razorpayRes.currency,
			name: "Jeevika Shah",
			description: "Order Payment",
			image: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/logo-seconday.png`,
			order_id: razorpayRes.razorpayOrderId,
			handler: async function (response: any) {
				setProcessingPayment(true);
				// 6. Verify payment signature
				const verifyRes = await verifyPaymentSignature(razorpayRes.razorpayOrderId!, response.razorpay_payment_id, response.razorpay_signature);
				if (!verifyRes.isPaymentVerified) {
					router.push(`/order-status?warning=${encodeMsg("There was an error completing the payment. Don't worry your order has been successfully placed, you can complete your payment here.")}&orderId=${orderRes.orderId}`);
					return;
				}

				// 8. Update payment details
				await updatePaymentDetails(orderRes.orderId!, response.razorpay_payment_id);

				// 9. Send confirmation
				await updateOrderStatus(orderRes.orderId!, "confirmed");
				setProcessingPayment(false);
				// 10. Redirect to confirmation with success
				router.push(`/order-status?success=${encodeMsg("Your order has been placed successfully.")}&orderId=${orderRes.orderId}`);
			},
			prefill: {
				name: userDetails.name,
				email: values.email,
				contact: values.phone,
			},
			notes: {
				address: `${userDetails.address?.line1}, ${userDetails.address?.line2}, ${userDetails.address?.city}, ${userDetails.address?.state}, ${userDetails.address?.country}, ${userDetails.address?.zip}`,
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
				rzp.on("payment.failed", function (response: any) {
					rzp.close();
					// move to order-status page with appropriate error message with windows object
					window.location.href = `/order-status?warning=${encodeMsg("There was an error completing the payment. Don't worry your order has been successfully placed, please complete the payment within 24 hours to confirm the order.")}&orderId=${orderRes.orderId}`;
				});
				rzp.open();
			};
			document.body.appendChild(script);
		}
	}

	return (
		<Form {...form}>
			{processingPayment && <ProcessingPayment />}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit(onSubmit)();
				}}
				className="space-y-8"
			>
				<div className="flex flex-col gap-4">
					<p className="text-xl font-semibold">Contact</p>
					{/* email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Please enter your email"
										type="email"
										{...field}
										disabled={!!userDetails.email} // disable if email exists
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										placeholder="Please enter your phone number"
										type="tel"
										{...field}
										disabled // always disabled
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Separator className="my-4" />
				{/* Address */}
				<div className="flex flex-col gap-4">
					{/* ordering for someone else checkbox */}
					<FormItem className="flex flex-row items-center gap-2 space-y-0">
						<FormControl>
							<Checkbox
								checked={orderForSomeoneElse}
								onCheckedChange={(checked) => {
									setOrderForSomeoneElse(!!checked);
								}}
								id="order_status"
							/>
						</FormControl>
						<FormLabel htmlFor="order_status" className="mb-0">
							Ordering for someone else?
						</FormLabel>
						<FormMessage />
					</FormItem>
					{orderForSomeoneElse && (
						<>
							<FormField
								control={form.control}
								name="recipient_name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Recipient Name</FormLabel>
										<FormControl>
											<Input placeholder="Enter recipient's name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="recipient_phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Recipient Phone</FormLabel>
										<FormControl>
											<Input placeholder="Enter recipient's phone" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}
					{/* line 1 */}
					<FormField
						control={form.control}
						name="line1"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address Line 1</FormLabel>
								<FormControl>
									<Input placeholder="Enter address line 1" {...field} disabled={!orderForSomeoneElse} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* line 2 */}
					<FormField
						control={form.control}
						name="line2"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address Line 2</FormLabel>
								<FormControl>
									<Input placeholder="Enter address line 2" {...field} disabled={!orderForSomeoneElse} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* city and state */}
					<div className="flex gap-4">
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input placeholder="Enter city" {...field} disabled={!orderForSomeoneElse} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="state"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input placeholder="Enter state" {...field} disabled={!orderForSomeoneElse} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					{/* country */}
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Country</FormLabel>
								<FormControl>
									<Input placeholder="Enter country" {...field} disabled={!orderForSomeoneElse} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* zipcode */}
					<FormField
						control={form.control}
						name="zip"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zipcode</FormLabel>
								<FormControl>
									<Input placeholder="Enter zipcode" {...field} disabled={!orderForSomeoneElse} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{/* pay now button */}
				<div className="flex justify-center">
					<Button className="w-1/2 cursor-pointer" type="submit">
						Pay Now
					</Button>
				</div>
			</form>
		</Form>
	);
}

export default CheckoutForm;
