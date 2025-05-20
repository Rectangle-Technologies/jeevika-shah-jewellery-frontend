"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbEllipsis, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Breadcrumbs() {
	const pathname = usePathname();
	// Split the path into segments, e.g. "/docs/components/breadcrumb" becomes ["docs", "components", "breadcrumb"]
	const pathSegments = pathname.split("/").filter(Boolean);

	// Build an array of breadcrumb objects including the “Home” link.
	const breadcrumbs = [
		{ name: "Home", href: "/" },
		...pathSegments.map((segment, index) => {
			const href = "/" + pathSegments.slice(0, index + 1).join("/");
			// You can improve naming by converting dashes or underscores and capitalizing words.
			const name = segment.charAt(0).toUpperCase() + segment.slice(1);
			return { name, href };
		}),
	];

	// Decide if we want to collapse the middle breadcrumbs into an ellipsis dropdown.
	// For example: if there are more than 3 breadcrumb items
	const totalItems = breadcrumbs.length;

	if (totalItems <= 3) {
		return (
			<Breadcrumb>
				<BreadcrumbList>
					{breadcrumbs.map((crumb, index) => {
						const isLast = index === breadcrumbs.length - 1;
						return (
							<React.Fragment key={crumb.href}>
								<BreadcrumbItem>{isLast ? <BreadcrumbPage>{crumb.name}</BreadcrumbPage> : <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>}</BreadcrumbItem>
								{index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
							</React.Fragment>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		);
	} else {
		// With many segments, we display:
		// - The first item ("Home")
		// - A dropdown for the intermediate breadcrumb items
		// - The last item as the current page.
		const firstCrumb = breadcrumbs[0];
		const middleCrumbs = breadcrumbs.slice(1, totalItems - 1);
		const lastCrumb = breadcrumbs[totalItems - 1];

		return (
			<Breadcrumb className="">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href={firstCrumb.href}>{firstCrumb.name}</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-1">
								<BreadcrumbEllipsis className="h-4 w-4" />
								<span className="sr-only">Toggle menu</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start">
								{middleCrumbs.map((crumb) => (
									<DropdownMenuItem key={crumb.href}>
										<BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{lastCrumb.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		);
	}
}
