import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

interface JewellerySizeDropdownProps {
	jewellerySizes: {
		displayName: string;
		weightOfMetal: number;
	}[];
	setSize: React.Dispatch<React.SetStateAction<string>>;
}

function JewellerySizeDropdown({ jewellerySizes, setSize }: JewellerySizeDropdownProps) {
	return (
		<div className="w-full">
			<Label className="mb-2 text-md">Select size:</Label>
			<Select onValueChange={(value) => setSize(value)} defaultValue={jewellerySizes[0].displayName}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select size" />
				</SelectTrigger>
				<SelectContent className="">
					{jewellerySizes.map((jewellerySize) => (
						<SelectItem key={jewellerySize.displayName} value={jewellerySize.displayName}>
							{jewellerySize.displayName}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}

export default JewellerySizeDropdown;
