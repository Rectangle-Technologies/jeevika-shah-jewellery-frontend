"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth-store";

export default function AuthInitializer() {
	const restore = useAuthStore((s) => s.restore);
	useEffect(() => {
		restore();
	}, [restore]);
	return null;
}
