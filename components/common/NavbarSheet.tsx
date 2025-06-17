import React from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useAuthStore } from "@/stores/auth-store";
interface NavbarSheetProps {
	navbarLinks: { title: string; link?: string; subLinks?: { title: string; link: string }[] }[];
}

function NavbarSheet({ navbarLinks }: NavbarSheetProps) {
	const { isAuthenticated, logout } = useAuthStore((state) => state);
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
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="p-3 text-xl">
					{navbarLinks.map((link) => {
						if (link.subLinks) {
							return (
								<Accordion key={link.title} type="single" collapsible>
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
								<SheetClose asChild className="cursor-pointer hover:underline">
									{link.link && <Link href={link.link}>{link.title}</Link>}
								</SheetClose>
							);
						}
					})}
					{isAuthenticated && (
						<div className="mt-3">
							<SheetClose asChild className=" flex text-xl font-normal px-0 mx-0 cursor-pointer">
								<Link href={"/profile"}>Profile</Link>
							</SheetClose>

							<Button variant="link" className=" flex text-xl font-normal px-0 mx-0 cursor-pointer" onClick={logout}>
								Logout
								{/* <LogOutIcon className="px-0 mx-0" /> */}
							</Button>
						</div>
					)}
					<div className="flex pb-8 gap-2 my-5 w-full">
						<SheetClose asChild className="hover:underline py-1">
							<Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK!}>
								<FacebookIcon />
							</Link>
						</SheetClose>
						<SheetClose asChild className="hover:underline py-1">
							<Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK!}>
								<InstagramIcon />
							</Link>
						</SheetClose>
					</div>
				</div>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default NavbarSheet;
