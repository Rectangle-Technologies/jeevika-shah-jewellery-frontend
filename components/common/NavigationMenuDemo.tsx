"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface NavigationMenuDemoProps {
	navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[];
}

export default function NavigationMenuDemo({ navbarLinks }: NavigationMenuDemoProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex flex-col md:flex-row gap-4">
				{navbarLinks.map((link) => {
					if (link.subLinks) {
						return (
							<NavigationMenuItem key={link.title}>
								<NavigationMenuTrigger
									className={`
                                        ${navigationMenuTriggerStyle()}
                                        relative bg-inherit! text-inherit! cursor-pointer px-0 pb-0 flex items-center
                                        before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
                                        before:bg-current before:transition-all before:duration-300
                                        hover:before:w-full
										font-normal
                                    `}
								>
									{link.title}
								</NavigationMenuTrigger>

								{link.subLinks && (
									<NavigationMenuContent className="p-0">
										<ul className="p-0">
											{link.subLinks.map((subLink) => (
												<ListItem key={subLink.title} href={subLink.link}>
													{subLink.title}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								)}
							</NavigationMenuItem>
						);
					} else {
						return (
							<NavigationMenuItem key={link.title}>
								<NavigationMenuLink
									href={link.link}
									className={`
                                        ${navigationMenuTriggerStyle()}
                                        relative bg-inherit! text-inherit! cursor-pointer px-0 pb-0 flex items-center
                                        before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
                                        before:bg-current before:transition-all before:duration-300
                                        hover:before:w-full
										font-normal
                                    `}
								>
									{link.title}
								</NavigationMenuLink>
							</NavigationMenuItem>
						);
					}
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a ref={ref} className={cn("block select-none rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-4 py-2", className)} {...props}>
					<div className="text-sm font-medium leading-none text-black">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug  text-black">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
