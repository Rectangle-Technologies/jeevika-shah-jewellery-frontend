"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Step1, { step1Schema, step1DefaultValues } from "./Step1";
import Step2, { step2Schema, step2DefaultValues } from "./Step2";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SignUpForm() {
	const [currentStep, setCurrentStep] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);
	const [success, setSuccess] = React.useState<string | null>(null);
	const [verificationId, setVerificationId] = React.useState<string | null>(null);
	const [step1Data, setStep1Data] = React.useState<typeof step1DefaultValues | null>(null);

	const formStep1 = useForm({
		resolver: zodResolver(step1Schema),
		defaultValues: step1DefaultValues,
	});

	const formStep2 = useForm({
		resolver: zodResolver(step2Schema),
		defaultValues: step2DefaultValues,
	});

	const handleStep1 = async (values: typeof step1DefaultValues) => {
		setError(null);
		setSuccess(null);
		setLoading(true);
		try {
			const checkRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/check-user`, { phone: values.phone });
			if (checkRes.data.exists) {
				setError("User already exists. Kindly login.");
				setLoading(false);
				return;
			}
			const otpRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/send-otp`, { phone: values.phone });
			if (otpRes.data.result && otpRes.data.result.toLocaleLowerCase() !== "success") {
				setError(otpRes.data.message);
				setLoading(false);
				return;
			}
			setSuccess("OTP sent to your phone.");
			setVerificationId(otpRes.data.body.data.verificationId);
			setStep1Data(values);
			setCurrentStep(2);
		} catch (err: any) {
			setError(err?.response?.data?.message || "Something went wrong.");
		} finally {
			setLoading(false);
		}
	};

	// Step 2 submit
	const handleStep2 = async (values: typeof step2DefaultValues) => {
		setError(null);
		setSuccess(null);
		setLoading(true);
		try {
			if (!step1Data) {
				setError("Step 1 data is missing.");
				setLoading(false);
				return;
			}
			const formattedUserData = {
				...step1Data,
				name: step1Data?.first_name + " " + step1Data?.last_name,
				address: {
					line1: step1Data.line1,
					city: step1Data.city,
					state: step1Data.state,
					country: step1Data.country,
					zip: step1Data.zip,
				},
				verificationId: verificationId,
				otp: values.otp,
			};
			const verifyRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`, formattedUserData);
			if (verifyRes.data.verified) {
				setSuccess("OTP verified! You can now complete registration.");
			} else {
				setError("Invalid OTP. Please try again.");
			}
		} catch (err: any) {
			setError(err?.response?.data?.message || "Failed to verify OTP.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full md:w-1/2 mx-auto p-3">
			{currentStep === 1 && (
				<Form {...formStep1}>
					<form onSubmit={formStep1.handleSubmit(handleStep1)} className="space-y-4 border p-4 rounded-md shadow-md">
						<p className="text-2xl font-semibold text-center">Sign-up Form</p>

						<Step1 form={formStep1} />

						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? "Please wait..." : "Send OTP"}
						</Button>
					</form>
				</Form>
			)}
			{currentStep === 2 && (
				<Form {...formStep2}>
					<form onSubmit={formStep2.handleSubmit(handleStep2)} className="space-y-4 border p-4 rounded-md shadow-md">
						<p className="text-2xl font-semibold text-center">Verify OTP</p>
						<Step2 form={formStep2} />
						<Button type="submit" className="w-full" disabled={loading}>
							{loading ? "Please wait..." : "Verify OTP"}
						</Button>
					</form>
				</Form>
			)}
			<ToastContainer />
		</div>
	);
}

export default SignUpForm;
