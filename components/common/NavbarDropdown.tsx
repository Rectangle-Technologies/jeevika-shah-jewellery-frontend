import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

interface NavbarDropdownProps {
	dropdownLinks: { title: string; link: string }[];
}

function NavbarDropdown({ dropdownLinks }: NavbarDropdownProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<ChevronDownIcon className="w-4 h-4 cursor-pointer" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{dropdownLinks.map((link) => (
					<DropdownMenuItem key={link.title}>
						<Link href={link.link}>{link.title}</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default NavbarDropdown;
