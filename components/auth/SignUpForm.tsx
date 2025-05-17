"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const formSchema = z.object({
	first_name: z.string({ required_error: "First name is required" }).trim().min(2, { message: "First name must be at least 2 characters long" }).max(50, { message: "First name must be at most 50 characters long" }),
	last_name: z.string().trim(),
	email: z.string({ required_error: "Email is required" }).trim().email({ message: "Please enter a valid email address" }),
	password: z.string({ required_error: "Password is required" }).trim().min(8, { message: "Password must be at least 8 characters long" }),
});

function SignUpForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<div className="w-full md:w-1/2 mx-auto p-3">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 border p-4 rounded-md shadow-md">
					<p className="text-2xl font-semibold text-center">Sign-up Form</p>
					<div className="flex flex-col md:flex-row md:items-center gap-4">
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<FormItem className="w-full md:w-1/2">
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter your first name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="last_name"
							render={({ field }) => (
								<FormItem className="w-full md:w-1/2">
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Enter your last name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="Enter your password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default SignUpForm;
