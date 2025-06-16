import React from "react";
import { z } from "zod";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

// Step 2 schema and defaults
export const step2Schema = z.object({
	otp: z.string().trim().min(4, { message: "OTP must be at least 4 characters long" }).max(6, { message: "OTP must be at most 6 characters long" }),
});

export const step2DefaultValues = {
	otp: "",
};

function Step2({ form }: { form: UseFormReturn<z.infer<typeof step2Schema>> }) {
	return (
		<FormField
			control={form.control}
			name="otp"
			render={({ field }) => (
				<FormItem>
					<FormLabel>OTP</FormLabel>
					<FormControl>
						<Input placeholder="Enter 4 digit OTP" maxLength={4} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}

export default Step2;
