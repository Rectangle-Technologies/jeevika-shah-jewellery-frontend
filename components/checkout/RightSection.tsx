import React from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function RightSection() {
	const labelContainerStyle = "space-y-2";
	return (
		<section className="w-full lg:w-1/2 h-full p-4">
			{/* contact */}
			<div className="flex flex-col gap-4">
				<p className="text-lg font-semibold">Contact</p>
				{/* email */}
				<div className={labelContainerStyle}>
					<Label>Email</Label>
					<Input placeholder="" />
				</div>
				{/* phone number */}
				<div className={labelContainerStyle}>
					<Label>Phone Number</Label>
					<Input placeholder="" />
				</div>
			</div>
			<Separator className="my-4" />
			{/* Address */}
			<div className="flex flex-col gap-4">
				{/* ordering for someone else checkbox */}
				<div className="flex items-center gap-2">
					<Checkbox name="order_status" />
					<Label htmlFor="order_status">Ordering for someone else</Label>
				</div>
				{/* line 1 */}
				<div className={labelContainerStyle}>
					<Label htmlFor="address">Address Line 1</Label>
					<Input placeholder="" name="address" />
				</div>
				{/* city */}
				<div className={labelContainerStyle}>
					<Label htmlFor="city">City</Label>
					<Input placeholder="" name="city" />
				</div>
				{/* state */}
				<div className={labelContainerStyle}>
					<Label htmlFor="state">State</Label>
					<Input placeholder="" name="state" />
				</div>
				{/* country */}
				<div className={labelContainerStyle}>
					<Label htmlFor="country">Country</Label>
					<Input placeholder="" name="country" />
				</div>
				{/* zipcode */}
				<div className={labelContainerStyle}>
					<Label htmlFor="zipcode">Zipcode</Label>
					<Input placeholder="" name="zipcode" />
				</div>
			</div>
			{/* pay now button */}
			<Button className="my-4">Pay Now</Button>
		</section>
	);
}

export default RightSection;
