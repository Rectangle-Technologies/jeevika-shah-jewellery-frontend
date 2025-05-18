import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function NavbarSheet() {
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
										<AccordionContent className="px-3">
											{link.subLinks.map((subLink) => (
												<div key={subLink.title} className="text-sm my-3 font-normal">
													<Link href={subLink.link}>{subLink.title}</Link>
												</div>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							);
						} else {
							return <Link href={link.link}>{link.title}</Link>;
						}
					})}
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
