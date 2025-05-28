"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

// Step 1: Phone schema
const phoneSchema = z.object({
	phone: z.string().min(10, "Enter a valid 10-digit phone number"),
});

// Step 2: OTP schema
const otpSchema = z.object({
	otp: z.string().min(4, "OTP must be at least 4 digits").max(6, "OTP must be at most 6 digits"),
});

function LoginForm() {
	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);
	const [phone, setPhone] = useState("");
	const [verificationId, setVerificationId] = useState<string | null>(null);
	const router = useRouter();
	const login = useAuthStore((s) => s.login);

	// Step 1 form
	const formPhone = useForm<z.infer<typeof phoneSchema>>({
		resolver: zodResolver(phoneSchema),
		defaultValues: { phone: "" },
	});

	// Step 2 form
	const formOtp = useForm<z.infer<typeof otpSchema>>({
		resolver: zodResolver(otpSchema),
		defaultValues: { otp: "" },
	});

	// Step 1: Check user and send OTP
	const handlePhoneSubmit = async (values: z.infer<typeof phoneSchema>) => {
		setLoading(true);
		try {
			// const checkRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/check-user`, { phone: values.phone });
			// if (!checkRes.data.exists) {
			// 	toast.error("User does not exist. Please sign up.", { position: "bottom-right" });
			// 	setLoading(false);
			// 	return;
			// }
			// User exists, send OTP
			const otpRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/send-otp`, { phone: values.phone });
			if (otpRes.data.result && otpRes.data.result.toLowerCase() !== "success") {
				toast.error(otpRes.data.message, { position: "bottom-right" });
				setLoading(false);
				return;
			}
			toast.success("OTP sent to your phone.", { position: "bottom-right" });
			setVerificationId(otpRes.data.body.data.verificationId);
			setPhone(values.phone);
			setStep(2);
		} catch (err: any) {
			toast.error(err?.response?.data?.message || "Something went wrong.", { position: "bottom-right" });
		} finally {
			setLoading(false);
		}
	};

	// Step 2: Verify OTP
	const handleOtpSubmit = async (values: z.infer<typeof otpSchema>) => {
		setLoading(true);
		try {
			const verifyRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`, {
				phone,
				verificationId,
				otp: values.otp,
			});
			if (verifyRes.data.result && verifyRes.data.result.toLowerCase() === "success") {
				toast.success("Login successful!", { position: "bottom-right" });
				const token = verifyRes.data.body.token;
				login(token);
				const restoreUrl = sessionStorage.getItem("restore_url");
				if (restoreUrl) {
					sessionStorage.removeItem("restore_url");
					router.push(restoreUrl);
				} else {
					router.push("/");
				}
			} else {
				toast.error(verifyRes.data.message || "Invalid OTP. Please try again.", { position: "bottom-right" });
			}
		} catch (err: any) {
			toast.error(err?.response?.data?.message || "Failed to verify OTP.", { position: "bottom-right" });
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full md:w-1/2 mx-auto p-3">
			{step === 1 && (
				<Form {...formPhone}>
					<form onSubmit={formPhone.handleSubmit(handlePhoneSubmit)} className="space-y-4 border p-4 rounded-md shadow-md">
						<p className="text-2xl font-semibold text-center">Login with Phone</p>
						<FormField
							control={formPhone.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="Enter your phone number" {...field} disabled={loading} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? "Please wait..." : "Send OTP"}
						</Button>
					</form>
				</Form>
			)}
			{step === 2 && (
				<Form {...formOtp}>
					<form onSubmit={formOtp.handleSubmit(handleOtpSubmit)} className="space-y-4 border p-4 rounded-md shadow-md">
						<p className="text-2xl font-semibold text-center">Enter OTP</p>
						<FormField
							control={formOtp.control}
							name="otp"
							render={({ field }) => (
								<FormItem>
									<FormLabel>OTP</FormLabel>
									<FormControl>
										<Input placeholder="Enter OTP" {...field} disabled={loading} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? "Verifying..." : "Verify OTP"}
						</Button>
					</form>
				</Form>
			)}
			<ToastContainer />
		</div>
	);
}

export default LoginForm;
