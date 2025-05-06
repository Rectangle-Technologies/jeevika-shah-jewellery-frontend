"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

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
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone_number: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<div className="w-full mx-auto p-3 flex flex-col items-center">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full my-10 px-2">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR NAME:</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} />
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
									<Input placeholder="john.doe@email.com" {...field} />
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
									<Input placeholder="1234567890" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>YOUR MESSAGE:</FormLabel>
								<FormControl>
									<Textarea className="h-[200px]" placeholder="Write your message here" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full cursor-pointer py-2">
						SEND MESSAGE
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default ContactUsForm;
