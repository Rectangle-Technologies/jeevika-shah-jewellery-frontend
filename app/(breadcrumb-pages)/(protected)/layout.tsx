"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
	const [checked, setChecked] = useState(false);
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
	const restore = useAuthStore((s) => s.restore);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		restore();
		setChecked(true);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (checked && !isAuthenticated) {
			// Store the current path before redirecting
			sessionStorage.setItem("restore_url", pathname);
			router.replace("/login");
		}
	}, [checked, isAuthenticated, router, pathname]);

	if (!checked) {
		// Optionally, show a loading spinner here
		return null;
	}

	if (!isAuthenticated) {
		return null;
	}

	return <>{children}</>;
}
