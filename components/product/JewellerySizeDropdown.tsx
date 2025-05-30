import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface JewellerySizeDropdownProps {
	jewellerySizes: {
		displayName: string;
		weightOfMetal: number;
	}[];
	setSize: React.Dispatch<React.SetStateAction<string>>;
}

function JewellerySizeDropdown({ jewellerySizes, setSize }: JewellerySizeDropdownProps) {
	return (
		<Select onValueChange={(value) => setSize(value)}>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Select Jewellery Size" />
			</SelectTrigger>
			<SelectContent className="">
				{jewellerySizes.map((jewellerySize) => (
					<SelectItem key={jewellerySize.displayName} value={jewellerySize.displayName}>
						{jewellerySize.displayName}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

export default JewellerySizeDropdown;
