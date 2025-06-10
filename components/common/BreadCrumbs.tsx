"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbEllipsis, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getProductDetails } from "@/utils/functions/product";

type Crumb = {
	name: string;
	href: string;
};

export function Breadcrumbs() {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter(Boolean);
	const [breadcrumbs, setBreadcrumbs] = useState<Crumb[]>([]);

	useEffect(() => {
		const generateBreadcrumbs = async () => {
			const crumbs: Crumb[] = [{ name: "Home", href: "/" }];

			if (pathSegments[0] === "product") {
				// Add "Product" breadcrumb that links to /collections/all
				crumbs.push({ name: "Product", href: "/collections/all" });

				// Add product name as the last crumb
				if (pathSegments.length > 1) {
					const product = await getProductDetails(pathSegments[1]);
					crumbs.push({
						name: product?.product[0]?.name || "Product",
						href: `/product/${pathSegments[1]}`,
					});
				}
			} else {
				// Generic case for other routes
				for (let i = 0; i < pathSegments.length; i++) {
					const segment = pathSegments[i];
					const href = "/" + pathSegments.slice(0, i + 1).join("/");
					const name = segment.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
					crumbs.push({ name, href });
				}
			}

			setBreadcrumbs(crumbs);
		};

		generateBreadcrumbs();
	}, [pathname]);

	if (breadcrumbs.length <= 3) {
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
		const firstCrumb = breadcrumbs[0];
		const middleCrumbs = breadcrumbs.slice(1, breadcrumbs.length - 1);
		const lastCrumb = breadcrumbs[breadcrumbs.length - 1];

		return (
			<Breadcrumb>
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
