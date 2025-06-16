import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { updateProfile } from "@/utils/functions/user";
import { toast } from "react-toastify";

interface ProfileDetailsProps {
	userDetails: User | null;
}

const profileSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().optional(),
	email: z.string().email("Invalid email"),
	phone: z
		.string()
		.min(1, "Phone number is required")
		.regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
	address: z.object({
		line1: z.string().min(1, "Address Line 1 is required"),
		line2: z.string().optional(),
		city: z.string().min(1, "City is required"),
		state: z.string().min(1, "State is required"),
		country: z.string().min(1, "Country is required"),
		zip: z.string().min(1, "ZIP is required"),
	}),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfileDetails({ userDetails }: ProfileDetailsProps) {
	const [editMode, setEditMode] = React.useState<boolean>(false);

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: userDetails
			? {
					firstName: userDetails?.name ? userDetails.name.split(" ")[0] : "",
					lastName: userDetails?.name && userDetails.name.split(" ").length > 1 ? userDetails.name.split(" ").slice(1).join(" ") : "",
					email: userDetails.email || "",
					phone: userDetails.phone || "",
					address: {
						line1: userDetails.address?.line1 || "",
						line2: userDetails.address?.line2 || "",
						city: userDetails.address?.city || "",
						state: userDetails.address?.state || "",
						country: userDetails.address?.country || "",
						zip: userDetails.address?.zip || "",
					},
			  }
			: {
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					address: {
						line1: "",
						line2: "",
						city: "",
						state: "",
						country: "",
						zip: "",
					},
			  },
	});

	React.useEffect(() => {
		if (userDetails) {
			form.reset({
				firstName: userDetails?.name ? userDetails.name.split(" ")[0] : "",
				lastName: userDetails?.name && userDetails.name.split(" ").length > 1 ? userDetails.name.split(" ").slice(1).join(" ") : "",
				email: userDetails.email || "",
				phone: userDetails.phone || "",
				address: {
					line1: userDetails.address?.line1 || "",
					line2: userDetails.address?.line2 || "",
					city: userDetails.address?.city || "",
					state: userDetails.address?.state || "",
					country: userDetails.address?.country || "",
					zip: userDetails.address?.zip || "",
				},
			});
		}
	}, [userDetails, form]);

	const onSubmit = async (data: ProfileFormValues) => {
		const body: User = {
			...userDetails,
			name: `${data.firstName}${data.lastName ? " " + data.lastName : ""}`,
			email: data.email,
			phone: data.phone,
			address: {
				...userDetails?.address,
				line1: data.address.line1,
				line2: data.address.line2,
				city: data.address.city,
				state: data.address.state,
				country: data.address.country,
				zip: data.address.zip,
			},
		};
		const updateRes = await updateProfile(body);
		if (updateRes) {
			toast.success("Profile updated successfully.", { position: "bottom-right" });
			window.location.reload();
		} else {
			toast.error("Something went wrong. Please try again.", { position: "bottom-right" });
		}
	};

	return (
		<div className="w-full flex flex-col gap-4 lg:gap-8 my-5">
			<p className="text-2xl">Customer Details</p>
			{editMode ? (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								disabled
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="address.line1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address Line 1</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="address.line2"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address Line 2</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="address.city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>City</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address.state"
								render={({ field }) => (
									<FormItem>
										<FormLabel>State</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address.country"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Country</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="address.zip"
								render={({ field }) => (
									<FormItem>
										<FormLabel>ZIP</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-2">
							<Button type="submit">Save</Button>
							<Button type="button" variant="secondary" onClick={() => setEditMode(false)}>
								Cancel
							</Button>
						</div>
					</form>
				</Form>
			) : (
				<>
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-3/5 lg:w-2/5">
						<div className="">
							<p>First Name:</p>
							{!userDetails ? <Skeleton className="h-6 w-24" /> : <p className="text-gray-700">{userDetails?.name ? userDetails.name.split(" ")[0] : ""}</p>}
						</div>
						<div className="">
							<p>Last Name:</p>
							{!userDetails ? <Skeleton className="h-6 w-24" /> : <p className="text-gray-700">{userDetails?.name && userDetails.name.split(" ").length > 1 ? userDetails.name.split(" ").slice(1).join(" ") : ""}</p>}
						</div>
					</div>
					<div className="">
						<p>Email:</p>
						{!userDetails ? <Skeleton className="h-6 w-48" /> : <p className="text-gray-700">{userDetails.email ? userDetails.email : "Not Provided"}</p>}
					</div>
					<div className="">
						<p>Phone:</p>
						{!userDetails ? <Skeleton className="h-6 w-24" /> : <p className="text-gray-700">{userDetails.phone ? userDetails.phone : "Not Provided"}</p>}
					</div>
					<div className="">
						<p>Address:</p>
						{!userDetails ? (
							<Skeleton className="h-6 w-64" />
						) : (
							userDetails.address && (
								<p className="text-gray-700">
									{userDetails.address.line1}, {userDetails.address.line2 && `${userDetails.address.line2},`} {userDetails.address.city}, {userDetails.address.state}, {userDetails.address.country}, {userDetails.address.zip}
								</p>
							)
						)}
					</div>
					<Button type="button" className="w-full md:w-[300px] mx-auto" onClick={() => setEditMode(true)}>
						Edit Details
					</Button>
				</>
			)}
			{/* <Link href={"/profile/addresses"} className="flex items-center gap-2">
					View Addresses <MoveRightIcon />
				</Link> */}
		</div>
	);
}

export default ProfileDetails;
