import React from "react";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon, FacebookIcon, InstagramIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useAuthStore } from "@/stores/auth-store";

interface NavbarSheetProps {
	navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[];
}

function NavbarSheet({ navbarLinks }: NavbarSheetProps) {
	const { isAuthenticated } = useAuthStore((state) => state);
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="default">
					<AlignLeftIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className="bg-gray-200">
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className="p-3 text-xl">
					{navbarLinks.map((link) => {
						if (link.subLinks) {
							return (
								<Accordion type="single" collapsible>
									<AccordionItem value="item-1">
										<AccordionTrigger className="text-xl">{link.title}</AccordionTrigger>
										<AccordionContent className="px-3 flex flex-col">
											{link.subLinks.map((subLink) => (
												<SheetClose asChild key={subLink.title} className="text-sm my-1 font-normal">
													<Link href={subLink.link}>{subLink.title}</Link>
												</SheetClose>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							);
						} else {
							return (
								<SheetClose asChild className="">
									{link.link && <Link href={link.link}>{link.title}</Link>}
								</SheetClose>
							);
						}
					})}
					{isAuthenticated && (
						<Button variant="link" className="text-xl font-normal flex px-0 mx-0">
							Logout
							{/* <LogOutIcon className="px-0 mx-0" /> */}
						</Button>
					)}
					<div className="flex pb-8 gap-2 my-5 w-full">
						<Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!} className="hover:underline py-1">
							<FacebookIcon />
						</Link>
						<Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK!} className="hover:underline py-1">
							<InstagramIcon />
						</Link>
					</div>
				</div>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default NavbarSheet;
