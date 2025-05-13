import React from "react";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon } from "lucide-react";
import { navbarLinks } from "@/constants";
import Link from "next/link";

function NavbarSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="default">
					<AlignLeftIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col h-full items-center justify-center gap-4 p-4">
					{navbarLinks.map((link) => {
						if (link.subLinks) {
							return (
								<div key={link.title}>
									<p>{link.title}</p>
									<ul className="list-disc pl-5">
										{link.subLinks.map((subLink) => (
											<li className="my-3" key={subLink.title}>
												<Link href={subLink.link}>{subLink.title}</Link>
											</li>
										))}
									</ul>
								</div>
							);
						} else {
							return (
								<Link href={link.link} key={link.title}>
									{link.title}
								</Link>
							);
						}
					})}
				</div>
				<SheetFooter>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

export default NavbarSheet;
