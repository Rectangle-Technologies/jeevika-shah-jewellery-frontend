"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const formSchema = z.object({
	name: z.string({ required_error: "Name is required" }).trim().min(2, { message: "Name must be at least 2 characters long" }).max(50, { message: "Name must be at most 50 characters long" }),

	email: z.string({ required_error: "Email is required" }).trim().email({ message: "Please enter a valid email address" }),

	phone_number: z
		.string({ required_error: "Phone number is required" })
		.trim()
		.regex(/^[6-9]\d{9}$/, {
			message: "Phone number must be a valid 10-digit Indian number",
		}),

	message: z.string({ required_error: "Message is required" }).trim().min(10, { message: "Message must be at least 10 characters long" }).max(1000, { message: "Message must be at most 1000 characters long" }),
});

function ContactUsForm() {
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone_number: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true);
		try {
			const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/enquiry/create`, {
				name: values.name,
				email: values.email,
				message: values.message,
				phone: values.phone_number,
			});
			if (response.data.result && response.data.result.toLowerCase() === "success") {
				toast.success("Your enquiry has been submitted successfully!", { position: "bottom-right" });
				form.reset();
			} else {
				toast.error(response.data.message || "Something went wrong. Please try again later.", { position: "bottom-right" });
			}
		} catch (error: any) {
			toast.error(error?.response?.data?.message || "Something went wrong. Please try again later.", { position: "bottom-right" });
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="w-full md:w-1/2 mx-auto p-3 flex flex-col items-center">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full my-10 px-2">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR NAME:</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} disabled={loading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR EMAIL:</FormLabel>
								<FormControl>
									<Input placeholder="john.doe@email.com" {...field} disabled={loading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR PHONE NUMBER:</FormLabel>
								<FormControl>
									<Input placeholder="9876543210" {...field} disabled={loading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR MESSAGE:</FormLabel>
								<FormControl>
									<Textarea className="h-[200px]" placeholder="Write your message here" {...field} disabled={loading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full md:w-auto mx-auto cursor-pointer p-6 flex items-center justify-center" disabled={loading}>
						{loading ? (
							<>
								<Loader2 className="animate-spin mr-2 h-5 w-5" />
								SENDING...
							</>
						) : (
							"SEND MESSAGE"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default ContactUsForm;
