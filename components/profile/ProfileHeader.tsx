"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";

function ProfileHeader() {
	const { logout } = useAuthStore((state) => state);
	const router = useRouter();
	return (
		<div className="flex items-center justify-between w-full mt-5">
			<p className="text-3xl">Account</p>
			<Button
				onClick={() => {
					logout();
					router.push("/login");
				}}
				variant={"link"}
				className="cursor-pointer"
			>
				<LogOutIcon />
				Logout
			</Button>
		</div>
	);
}

export default ProfileHeader;
