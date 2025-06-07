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
import { useRouter } from "next/navigation";

function SignUpForm() {
	const router = useRouter();

	const [currentStep, setCurrentStep] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
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
		setLoading(true);
		try {
			const checkRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/check-exists`, { phone: values.phone });
			if (checkRes.data.result && checkRes.data.result.toLocaleLowerCase() === "success") {
				toast.error("User already exists. Kindly login.", {
					type: "warning",
					position: "bottom-right",
				});
				setLoading(false);
				return;
			}
			const otpRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/send-otp`, { phone: values.phone });
			if (otpRes.data.result && otpRes.data.result.toLocaleLowerCase() !== "success") {
				toast.error(otpRes.data.message, {
					type: "error",
					position: "bottom-right",
				});
				setLoading(false);
				return;
			}
			toast("OTP sent to your phone.", {
				type: "success",
				position: "bottom-right",
			});
			setVerificationId(otpRes.data.body.data.verificationId);
			setStep1Data(values);
			setCurrentStep(2);
			// scroll to the top
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} catch (err: any) {
			toast.error(err?.response?.data?.message || "Failed to send OTP.", {
				type: "error",
				position: "bottom-right",
			});
		} finally {
			setLoading(false);
		}
	};

	// Step 2 submit
	const handleStep2 = async (values: typeof step2DefaultValues) => {
		setLoading(true);
		try {
			if (!step1Data) {
				toast("Step 1 data is missing.", {
					type: "error",
					position: "bottom-right",
				});
				setLoading(false);
				return;
			}
			const formattedUserData = {
				...step1Data,
				name: step1Data?.first_name + " " + step1Data?.last_name,
				address: {
					line1: step1Data.line1,
					line2: step1Data.line2,
					city: step1Data.city,
					state: step1Data.state,
					country: step1Data.country,
					zip: step1Data.zip,
				},
				verificationId: verificationId,
				otp: values.otp,
			};
			const verifyRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify-otp`, formattedUserData);
			if (verifyRes.data.result && verifyRes.data.result.toLocaleLowerCase() === "success") {
				toast("OTP verified! You can now complete registration.", {
					type: "success",
					position: "bottom-right",
				});
				localStorage.setItem("at", verifyRes.data.body.token);
				const restoreUrl = sessionStorage.getItem("restore_url");
				if (restoreUrl) {
					sessionStorage.removeItem("restore_url");
					router.push(restoreUrl);
				} else {
					router.push("/");
				}
			} else {
				toast(verifyRes.data.message || "Failed to verify OTP.", {
					type: "error",
					position: "bottom-right",
				});
			}
		} catch (err: any) {
			toast.error(err?.response?.data?.message || "Failed to verify OTP.", {
				type: "error",
				position: "bottom-right",
			});
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
