import React from "react";
import { Skeleton } from "../ui/skeleton";

function CheckoutSkeleton() {
	return (
		<div className="flex flex-col gap-4">
			<Skeleton className="h-6 w-1/3" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<Skeleton className="my-4 h-px w-full" />
			<div className="flex items-center gap-2">
				<Skeleton className="h-4 w-4" />
				<Skeleton className="h-4 w-1/3" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-4 w-1/4" />
				<Skeleton className="h-10" />
			</div>
			<Skeleton className="my-4 h-10" />
		</div>
	);
}

export default CheckoutSkeleton;
