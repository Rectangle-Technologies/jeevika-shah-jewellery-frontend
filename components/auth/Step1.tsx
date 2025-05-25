import React from "react";
import { z } from "zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

// Step 1 schema and defaults
export const step1Schema = z.object({
	first_name: z.string().trim().min(2, { message: "First name must be at least 2 characters long" }).max(50, { message: "First name must be at most 50 characters long" }),
	last_name: z.string().trim(),
	email: z.string().trim().email({ message: "Please enter a valid email address" }),
	phone: z
		.string()
		.trim()
		.regex(/^[6-9]\d{9}$/, { message: "Phone number must be a valid 10-digit Indian number" }),
	line1: z.string().trim().min(2, { message: "Address line 1 must be at least 2 characters long" }).max(150, { message: "Address line 1 must be at most 150 characters long" }),
	city: z.string().trim().min(2, { message: "City must be at least 2 characters long" }).max(50, { message: "City must be at most 50 characters long" }),
	state: z.string().trim().min(2, { message: "State must be at least 2 characters long" }).max(50, { message: "State must be at most 50 characters long" }),
	country: z.string().trim().min(2, { message: "Country must be at least 2 characters long" }).max(50, { message: "Country must be at most 50 characters long" }),
	zip: z.string().trim().min(6, { message: "Zip code must be at least 6 characters long" }).max(6, { message: "Zip code must be at most 6 digits long" }),
	dob: z.string().trim().min(2, { message: "Date of birth must be at least 2 characters long" }).max(50, { message: "Date of birth must be at most 50 characters long" }),
});

export const step1DefaultValues = {
	first_name: "",
	last_name: "",
	email: "",
	phone: "",
	line1: "",
	city: "",
	state: "",
	country: "",
	zip: "",
	dob: "",
};

function Step1({ form }: { form: UseFormReturn<z.infer<typeof step1Schema>> }) {
	return (
		<>
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
				name="phone"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Phone</FormLabel>
						<FormControl>
							<Input placeholder="Enter your phone number" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="line1"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Address Line 1</FormLabel>
						<FormControl>
							<Input placeholder="Enter address line 1" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="city"
				render={({ field }) => (
					<FormItem>
						<FormLabel>City</FormLabel>
						<FormControl>
							<Input placeholder="Enter city" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="state"
				render={({ field }) => (
					<FormItem>
						<FormLabel>State</FormLabel>
						<FormControl>
							<Input placeholder="Enter state" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="country"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Country</FormLabel>
						<FormControl>
							<Input placeholder="Enter country" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="zip"
				render={({ field }) => (
					<FormItem>
						<FormLabel>PIN Code</FormLabel>
						<FormControl>
							<Input placeholder="Enter PIN code" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="dob"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Date of Birth</FormLabel>
						<FormControl>
							<Input type="date" placeholder="Enter date of birth" {...field} value={field.value || ""} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
}

export default Step1;
